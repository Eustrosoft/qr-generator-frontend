export const initForms = (handleSubmit) => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formValue = getFormValue(event.target);
      await handleSubmit({
        formName: event.target.name,
        ...formValue,
      });
    });
  });
};

export const getFormValue = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
};
