export const pushData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const putData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
