import { COMPONENTS_NAMES_LIST } from '../ui.constants.js';

class UiTabComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define(COMPONENTS_NAMES_LIST.UI_TAB, UiTabComponent);
