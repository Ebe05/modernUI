const navLinks = document.querySelector('.nav-links');
const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});