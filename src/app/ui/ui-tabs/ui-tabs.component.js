import styleText from './ui-tabs.component.css?inline';
import { COMPONENTS_NAMES_LIST } from '../ui.constants.js';
import { loadStyles } from '../../shared/utils/load-styles.function.js';

class UiTabsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const tabContainer = document.createElement('div');
    tabContainer.className = 'tabs';

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';

    loadStyles(styleText, this.shadowRoot);

    this.shadowRoot.append(tabContainer, contentContainer);
  }

  connectedCallback() {
    const tabs = Array.from(this.children).filter(
      (child) => child.tagName === COMPONENTS_NAMES_LIST.UI_TAB.toUpperCase(),
    );
    const tabContainer = this.shadowRoot.querySelector('.tabs');
    const contentContainer =
      this.shadowRoot.querySelector('.content-container');

    tabs.forEach((tab, index) => {
      const tabButton = document.createElement('div');
      tabButton.textContent = tab.getAttribute('label') || `Tab ${index + 1}`;
      tabButton.addEventListener('click', () => this.showTab(index));
      tabContainer.appendChild(tabButton);

      const content = document.createElement('div');
      content.className = 'content';
      content.append(...Array.from(tab.children));
      contentContainer.appendChild(content);
    });

    this.showTab(0);
  }

  showTab(index) {
    const tabContainer = this.shadowRoot.querySelector('.tabs');
    const contentContainer =
      this.shadowRoot.querySelector('.content-container');

    Array.from(tabContainer.children).forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    Array.from(contentContainer.children).forEach((content, i) => {
      content.classList.toggle('active', i === index);
    });
  }
}

customElements.define(COMPONENTS_NAMES_LIST.UI_TABS, UiTabsComponent);
