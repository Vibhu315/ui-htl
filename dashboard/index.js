function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const toggleButton = document.getElementById('navbar-toggle-button');

    if (navbar.style.transform === 'translateX(-200px)') {
        navbar.style.transform = 'translateX(0)';
        toggleButton.classList.add('hidden');
    } else {
        navbar.style.transform = 'translateX(-200px)';
        toggleButton.classList.remove('hidden');
    }
}

document.getElementById('toggle-navbar').addEventListener('click', toggleNavbar);
document.getElementById('navbar-toggle-button').addEventListener('click', toggleNavbar);
