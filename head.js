const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.overlay'); // Додайте пошук фону

// Функція, яка відкриває меню
function openNavMenu() {
    burgerIcon.classList.add('active');
    navList.classList.add('active');
    overlay.style.display = 'block'; // Показати фон при відкритті меню
}

// Функція, яка закриває меню
function closeNavMenu() {
    burgerIcon.classList.remove('active');
    navList.classList.remove('active');
    overlay.style.display = 'none'; // Приховати фон при закритті меню
}

navToggle.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
        closeNavMenu();
    } else {
        openNavMenu();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const navList = document.querySelector('.nav-list');

    // Функція, яка приховує меню
    function hideNavMenu() {
        closeNavMenu();
    }

    // Додавання обробників подій для overlay
    overlay.addEventListener('click', hideNavMenu);
});

// Отримайте елементи DOM для посилання та меню
const socialPanel = document.querySelector(".has-dropdown"); // Вибираємо батьківський елемент з посиланням "Соцмережі"
const socialLink = socialPanel.querySelector(".panel"); // Вибираємо саме посилання "Соцмережі"
const dropdownMenu = socialPanel.querySelector(".dropdown-menu"); // Вибираємо випадаюче меню

// Обробник подій для відкривання/закривання випадаючого списку
socialLink.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("active"); // Відкриваємо/закриваємо випадаюче меню
});

// Обробник подій для закриття випадаючого списку при кліку поза ним
document.addEventListener("click", function (e) {
    if (!socialPanel.contains(e.target)) {
        dropdownMenu.classList.remove("active"); // Закриваємо випадаюче меню при кліку поза ним
    }
});

