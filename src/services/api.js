import axios from "axios";

const BASE_URL = "#";

const getProducts = async () => {
   const response = await axios.get(BASE_URL);
   return response.data;
};

export { getProducts };
