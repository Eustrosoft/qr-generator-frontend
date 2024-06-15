import { API_URL } from '../constants/app.constants.js';

export const renderQrImg = (params) => {
  const preview = document.querySelector('#preview');
  const qrGenerationResultWrapper = document.querySelector(
    '.qr-generation-result-wrapper',
  );
  const qrGenerationResultHeading =
    qrGenerationResultWrapper.querySelector('h1');

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

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', `${API_URL}?${stringifiedParams}`);
  imgEl.setAttribute('alt', '');
  imgEl.classList.add('qr-preview');

  qrGenerationResultHeading.textContent = 'Результат генерации';

  preview.replaceChildren(imgEl);
};
