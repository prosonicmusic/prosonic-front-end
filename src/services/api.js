import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getTracks = async () => {
   const response = await axios.get(`${BASE_URL}/product/get?product_type=Track`);
   return response.data.results;
};

const getPackages = async () => {
   const response = await axios.get(`${BASE_URL}/product/get?product_type=Package`);
   return response.data.results;
};

export { getTracks, getPackages };
