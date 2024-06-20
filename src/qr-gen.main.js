const FORM_TYPE = {
  QXYZ: 'QXYZ',
  TEXT: 'TEXT',
  URL: 'URL',
  PHONE: 'PHONE',
  SMS: 'SMS',
  EMAIL: 'EMAIL',
  CONTACT: 'CONTACT',
  WIFI: 'WIFI',
  LOCATION: 'LOCATION',
  SHARED_PARAMS: 'SHARED-PARAMS',
};

const API_URL = 'https://debug.dev37.qxyz.ru/qrgen/generate';

const initTabs = () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('active'));
      tabContents.forEach((tabContent) =>
        tabContent.classList.remove('active'),
      );

      tab.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
};

const submitActiveTabForm = () => {
  const activeTabContent = document.querySelector('.tab-content.active');
  const activeTabForm = activeTabContent.querySelector('form');
  activeTabForm.requestSubmit();
};

const initGenerateQrButton = () => {
  const button = document.querySelector('#generate-qr-button');
  button.addEventListener('click', (event) => {
    submitActiveTabForm();
  });
};

const initForms = (handleSubmit) => {
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

const getFormValue = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
};

const getSharedParamsForm = () => {
  return document.querySelector(`form[name="${FORM_TYPE.SHARED_PARAMS}"]`);
};

const makeQrByType = (form) => {
  const sharedParamsForm = getSharedParamsForm();
  sharedParamsForm.requestSubmit();

  if (!sharedParamsForm.checkValidity()) {
    return;
  }

  const sharedParams = getFormValue(sharedParamsForm);

  switch (form.formName) {
    case FORM_TYPE.QXYZ: {
      const params = {
        q: form.q,
        p: form.p,
        d: form.d,
        site: form.site,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.TEXT: {
      const params = {
        type: form.formName,
        text: form.text,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.URL: {
      const params = { type: form.formName, url: form.url, ...sharedParams };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.PHONE: {
      const params = {
        type: form.formName,
        phone: form.phone,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.SMS: {
      const params = {
        type: form.formName,
        phone: form.phone,
        text: form.text,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.EMAIL: {
      const params = {
        type: form.formName,
        email: form.email,
        subject: form.subject,
        text: form.text,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.CONTACT: {
      const params = {
        type: form.formName,
        firstName: form.firstName,
        lastName: form.lastName,
        organization: form.organization,
        title: form.title,
        email: form.email,
        phone: form.phone,
        mobilePhone: form.mobilePhone,
        fax: form.fax,
        street: form.street,
        city: form.city,
        region: form.region,
        postcode: form.postcode,
        country: form.country,
        url: form.url,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.WIFI: {
      const params = {
        type: form.formName,
        ssid: form.ssid,
        password: form.password,
        encryption: form.encryption,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.LOCATION: {
      const params = {
        type: form.formName,
        latitude: form.latitude,
        longitude: form.longitude,
        distance: form.distance,
        ...sharedParams,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.SHARED_PARAMS: {
      break;
    }
    default: {
      throw new Error(`Unknown form "${form.formName}"`);
    }
  }
};

const renderQrImg = (params) => {
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

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initForms((form) => makeQrByType(form));
  initGenerateQrButton();
});
