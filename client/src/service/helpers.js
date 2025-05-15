import lodash from "lodash";

export const groupIngredients = (ingredients) => {
  // 1. Get the keys of the object
  const keys = Object.keys(ingredients);

  const indices = [
    // 4. Remove duplicates by spreading the Set
    ...new Set(
      // 2. Loop the keys and get the index of each field
      keys
        .map((key) => {
          const match = key.match(/^ingredient(\d+)(?:_quantity|_price)?$/);
          return match ? parseInt(match[1], 10) : null;
        })
        // 3. Remove null indices
        .filter((index) => index !== null)
    ),
  ];

  //5. Sort from liwest to highest
  indices.sort((a, b) => a - b);

  return indices
    .map((i) => ({
      name: ingredients[`ingredient${i}`] || "",
      quantity: ingredients[`ingredient${i}_quantity`] || "",
      price: parseFloat(ingredients[`ingredient${i}_price`]).toFixed(2) || "",
    })) // 6. Remove empty fields and keeps only the ones that are fully filled
    .filter(
      (item) =>
        item.name.trim() !== "" &&
        item.quantity.trim() !== "" &&
        item.price.trim() !== ""
    );
};

/*
This is my proposal for turning the objects into an array grouping by 3
Object.keys(ingredients)
        .map(
          (key, i) =>
            i % 3 === 0 && {
              name: Object.values(ingredients)[i],
              cantidad: Object.values(ingredients)[i + 1],
              precio: Object.values(ingredients)[i + 2],
            }
        )
        .filter((object) => object !== false)
*/

export const mergeArrayOfIngredients = (columnsArray, ingredientsArray) => {
  // Verify the difference between two array of objects
  // The lodash library have very usefull methods for this

  const lengthDiff = columnsArray.length < ingredientsArray.length;
  const dataDiff = lodash.take(ingredientsArray, columnsArray.length);

  // If the array that tracks the edited columns have no columns
  // Return The original array, meaning the user deleted all of them
  if (columnsArray.length <= 0) return columnsArray;

  // If there is a length difference, we need to figure out that difference
  // The dataDiff variable return that difference
  // The lodash _.take method, return N elements from the position 0 of the array
  // The length of the columnsArray is used here because we already know that ther is a length diff
  // So we take advantage of that to "take" that amount of element
  // The objective here is to "merge" the arrays in one, so we can return both, edited columns in case there were some
  // And deleted columns
  if (lengthDiff) {
    return dataDiff;
  }

  // If none of the above conditions were met, return the ingredientsArray
  // This means, there were data updated, but no column deletion
  return ingredientsArray;
};
