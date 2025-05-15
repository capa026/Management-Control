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
  const lengthDiff = columnsArray.length < ingredientsArray.length;
  const dataDiff = lodash.take(ingredientsArray, columnsArray.length);

  if (columnsArray.length <= 0) return columnsArray;
  if (lengthDiff) {
    return dataDiff;
  }
  return ingredientsArray;
};
