const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;
const content = document.querySelector('.content');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  content.classList.toggle('dark-theme');
});
