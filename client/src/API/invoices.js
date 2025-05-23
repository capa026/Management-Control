import { deleteData, pushData, putData } from "../service/fetchData";

const BACKEND_URL = import.meta.env.PUBLIC_SERVER_URL + "/invoices";

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
