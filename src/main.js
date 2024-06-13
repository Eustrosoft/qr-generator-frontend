import { initTabs } from './app/components/tabs/tabs.js';
import { initForms } from './app/components/forms/forms.js';
import { makeQrByType } from './app/components/forms/make-qr-by-type.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initForms(async (form) => await makeQrByType(form));
});
