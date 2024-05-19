import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = (limit: number, page: number) => {
  return axios.get(`https://fakestoreapi.com/products?limit=${limit*page}`);
};

export const fetchCategories = () => {
  return axios.get(`${API_URL}/products/categories`);
};
