import axios from 'axios';

export function getResults(query: string): Promise<any> {
  const { REACT_APP_API_URL } = process.env;
  return axios.get(`${REACT_APP_API_URL}/items?q=${query}`);
}

export function getProductDetail(id: string): Promise<any> {
  const { REACT_APP_API_URL } = process.env;
  return axios.get(`${REACT_APP_API_URL}/items/${id}`);
}
