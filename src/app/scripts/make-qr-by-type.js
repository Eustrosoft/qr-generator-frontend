import { FORM_TYPE } from '../constants/app.constants.js';
import { renderQrImg } from './render-qr-img.js';

export const makeQrByType = async (form) => {
  console.log(form);
  switch (form.formName) {
    case FORM_TYPE.QXYZ: {
      const params = {
        q: form.q,
        p: form.p,
        d: form.d,
        site: form.site,
      };
      renderQrImg(params);
      break;
    }
    case FORM_TYPE.TEXT: {
      const params = { type: form.formName, text: form.text };
      renderQrImg(params);
      break;
    }
    default: {
      throw new Error(`Unknown form "${form.formName}"`);
    }
  }
};
