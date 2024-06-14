import { submitActiveTabForm } from '../tabs/tabs.js';

export const initGenerateQrButton = () => {
  const button = document.querySelector('#generate-qr-button');
  button.addEventListener('click', (event) => {
    submitActiveTabForm();
  });
};
