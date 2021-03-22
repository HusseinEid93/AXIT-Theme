/* Show/hide the contents of the tabs in the .tabs section  */
const tabs = document.querySelectorAll('section.tabs div.tabs > *');
const tabContents = document.querySelectorAll('section.tabs .tabs-contents > *');

tabs.forEach((tab, index) => {
   tab.addEventListener('click', function () {
      tabs.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      tabContents[index].classList.add('active');
   });
});

