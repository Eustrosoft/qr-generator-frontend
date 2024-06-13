import { httpGet } from '../services/http.service.js';

export const makeQr = async (params) => {
  const submitButton = document
    .querySelector(`form[name="${params.type}"]`)
    .querySelector('button[type="submit"]');
  submitButton.disabled = true;
  return await httpGet('/qrgen/generate', params).finally(() => {
    submitButton.disabled = false;
  });
};
