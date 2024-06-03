import { initTabs } from './app/components/tabs.js';
import { initForms } from './app/components/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initForms(async (formData) => {
    try {
      const response = await submitForm(formData);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  });
});
