import { initTabs } from './app/components/tabs/tabs.js';
import { initForms } from './app/components/forms/forms.js';
import { makeQrByType } from './app/scripts/make-qr-by-type.js';
import { initGenerateQrButton } from './app/components/buttons/buttons.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initForms((form) => makeQrByType(form));
  initGenerateQrButton();
});
