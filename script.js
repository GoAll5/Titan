window.addEventListener('scroll', function() {
    const header = document.getElementsByClassName('main-page-header');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.querySelector('.scroll-arrow').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    const burgerMenu = document.getElementById('burger-menu');
    const header = document.getElementById('header-up');
    // Показать/скрыть навигацию
    if (nav.classList.contains('open')) {
        header.classList.remove('open');
        nav.classList.remove('open');
        burgerMenu.textContent = '☰'; // Вернуть бургер-иконку
    } else {
        header.classList.add('open');
        nav.classList.add('open');
        burgerMenu.textContent = '✖'; // Поменять на крестик
    }
}