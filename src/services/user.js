import api from "../configs/axios";

const getProducts = () => api.get("/products");

export { getProducts };
