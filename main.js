const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');
mobileMenuExit = document.getElementById('mobile-exit');

mobileMenu.addEventListener('click', () => {
    mobileMenuExit.style.display = "block";
    nav.style.display = 'block';
});

mobileMenuExit.addEventListener('click', () => {
    mobileMenuExit.style.display = "none";
    nav.style.display = 'none';
});