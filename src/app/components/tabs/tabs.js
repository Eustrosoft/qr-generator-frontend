export const initTabs = () => {
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

export const submitActiveTabForm = () => {
  const activeTabContent = document.querySelector('.tab-content.active');
  const activeTabForm = activeTabContent.querySelector('form');
  activeTabForm.requestSubmit();
};
