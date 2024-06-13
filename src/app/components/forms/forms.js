export const initForms = (handleSubmit) => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formValue = Object.fromEntries(formData);
      await handleSubmit({
        formName: event.target.name,
        ...formValue,
      });
    });
  });
};
