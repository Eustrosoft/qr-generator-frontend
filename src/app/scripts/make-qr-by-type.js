import { FORM_TYPE } from '../constants/app.constants.js';
import { renderQrImg } from './render-qr-img.js';
import {
  getFormValue,
  getSharedParamsForm,
} from '../components/forms/forms.js';

export const makeQrByType = (form) => {
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
