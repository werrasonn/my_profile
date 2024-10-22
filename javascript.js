const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active"); // Toggle the "active" class
}

const toggleSwitchInput = document.getElementById('toggle-switch-input');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitchInput.checked = true;
} else {
    body.classList.add('light-mode');
}

// Toggle function
toggleSwitchInput.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Save user preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});