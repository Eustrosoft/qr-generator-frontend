export const loadStyles = (styleText, shadowRoot) => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styleText);
  shadowRoot.adoptedStyleSheets = [sheet];
};
