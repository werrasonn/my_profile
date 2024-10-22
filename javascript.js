const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active"); // Toggle the "active" class
}

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});