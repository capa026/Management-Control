import { deleteData, pushData, putData } from "../service/fetchData";

const BACKEND_URL = import.meta.env.PUBLIC_SERVER_URL + "/costStructure";

export const getAll = async () => {
  try {
    const response = await fetch(BACKEND_URL + "/getAll");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteById = async (id) => {
  try {
    await deleteData(BACKEND_URL + "/deleteById", id);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createStructure = async (data) => {
  try {
    const response = await pushData(BACKEND_URL + "/createStructure", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateStructure = async (data) => {
  try {
    const response = await putData(BACKEND_URL + "/updateStructure", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
