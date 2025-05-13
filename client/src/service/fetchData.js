export const pushData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "POST",
  });
  return response.json();
};

export const putData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "PUT",
  });
  return response.json();
};

export const deleteData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "DELETE",
  });
  return response.json();
};
