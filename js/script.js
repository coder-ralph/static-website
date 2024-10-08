// Get the switch element and icon
const switchElement = document.querySelector('.switch');
const themeIcon = document.querySelector('.theme-icon i');

// Check localStorage for the theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun'); // Set sun icon in dark mode
}

// Add event listener for the switch
switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Toggle the icon
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun'); // Change to sun icon
  } else {
    localStorage.setItem('theme', 'light');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon'); // Change to moon icon
  }
});
