import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getProducts = async () => {
   const response = await axios.get(`${BASE_URL}/product/get`);
   return response;
};

export { getProducts };
