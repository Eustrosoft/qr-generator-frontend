import { QR_TYPE } from '../../constants/app.constants.js';
import { makeQr } from '../../api/api.js';

export const makeQrByType = async (form) => {
  switch (form.formName) {
    case QR_TYPE.TEXT: {
      const params = { type: form.formName, text: form.text ?? '' };
      await makeQr(params);
      break;
    }
    default: {
      throw new Error(`Unknown form "${form.formName}"`);
    }
  }
};
