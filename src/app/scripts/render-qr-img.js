import { API_URL } from '../constants/app.constants.js';

export const renderQrImg = (params) => {
  const preview = document.getElementById('preview');
  const imgEl = document.createElement('img');
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (
      params[key] !== '' &&
      params[key] !== null &&
      params[key] !== undefined
    ) {
      searchParams.append(key, params[key]);
    }
  }
  const stringifiedParams = searchParams.toString();
  imgEl.setAttribute('src', `${API_URL}?${stringifiedParams}`);
  imgEl.setAttribute('alt', '');
  imgEl.classList.add('qr-preview');
  preview.replaceChildren(imgEl);
};
