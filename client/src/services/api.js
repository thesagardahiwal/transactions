import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Use your actual backend URL

export const fetchTransactions = (month, search = '', page = 1) => {
  const responce = axios.get(`${API_URL}/transactions`, {
    params: { month, search, page }
  }).then((res) => {
    console.log(res);
  })
  return responce;
  
};

export const fetchStatistics = (month) => {
  return axios.get(`${API_URL}/statistics`, { params: { month } });
};

export const fetchPriceRanges = (month) => {
  return axios.get(`${API_URL}/price-range`, { params: { month } });
};
