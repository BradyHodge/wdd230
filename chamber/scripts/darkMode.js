function toggleLogoColorScheme() {
    const lightScheme = "primary:#8C6E46,secondary:#26534C,tertiary:#000000";
    const darkScheme = "primary:#AF9567,secondary:#91B3A6,tertiary:#ffffff";
  const icon = document.getElementById('dark-mode-icon');
  const currentScheme = icon.getAttribute('colors');
  if (currentScheme === lightScheme) {
    icon.setAttribute('colors', darkScheme);
  } else {
    icon.setAttribute('colors', lightScheme);
  }
}
function darkMode() {
    let isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem('dark-mode', isDarkMode);
    const links = document.querySelectorAll('a');
    links.forEach(element => {
        element.classList.toggle('dark-mode-link');
    });
    document.querySelectorAll('nav ul li a').forEach(function(element) {
      element.classList.toggle('dark-mode-nav');
  });
  document.getElementById('wind-chill-input').classList.toggle('dark-mode-input');
    toggleLogoColorScheme();
}
document.addEventListener('DOMContentLoaded', (event) => {
    let isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if(isDarkMode) {
        document.body.classList.add("dark-mode");
        const links = document.querySelectorAll('a');
        links.forEach(element => {
            element.classList.add('dark-mode-link');
        });
        document.querySelectorAll('nav ul li a').forEach(function(element) {
          element.classList.toggle('dark-mode-nav');
      });
      document.getElementById('wind-chill-input').classList.toggle('dark-mode-input');
        toggleLogoColorScheme();
    }
});

const darkButton = document.querySelector('#dark-mode-button');
darkButton.addEventListener('click', darkMode);