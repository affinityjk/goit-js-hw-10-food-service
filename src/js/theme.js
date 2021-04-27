const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyClassRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const currentTheme = localStorage.getItem('theme');

function setLightTheme() {
  bodyClassRef.classList.remove(Theme.DARK);
  bodyClassRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function setDarkTheme() {
  bodyClassRef.classList.remove(Theme.LIGHT);
  bodyClassRef.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}

function checkCurrentTheme(currentTheme) {
  if (currentTheme === Theme.DARK) {
    setDarkTheme();
    checkboxRef.checked = true;
  }
}

function onCheckboxChange({ target }) {
  if (target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

checkboxRef.addEventListener('change', onCheckboxChange);
checkCurrentTheme(currentTheme);