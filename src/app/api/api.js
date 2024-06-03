import { httpGet, httpPost } from '../services/http.service.js';

export const fetchData = async () => {
  return await httpGet(`${API_URL}/data`);
};

export const submitForm = async (formData) => {
  return await httpPost(`${API_URL}/submit`, formData);
};
