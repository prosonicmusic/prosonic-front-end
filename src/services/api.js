import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getTracks = async () => {
   const response = await axios.get(`${BASE_URL}/product/get?product_type=Track&page_size=10`);
   return response.data.results;
};

const getPackages = async () => {
   const response = await axios.get(`${BASE_URL}/product/get?product_type=Package&page_size=10`);
   return response.data.results;
};

const getFiveTracks = async () => {
   const response = await axios.get(`${BASE_URL}/product/get?product_type=Track&page_size=10`);
   return response.data.results;
};

const getPremiumTracks = async () => {
   const response = await axios.get(
      `${BASE_URL}/product/get?tag=PREMIUM&product_type=Track&page=1&page_size=5`
   );
   return response.data.results;
};

export { getTracks, getFiveTracks, getPremiumTracks, getPackages };
