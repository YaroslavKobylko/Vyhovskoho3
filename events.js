const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.overlay-after'); // Додайте пошук фону

navToggle.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    navList.classList.toggle('active');
    overlay.classList.toggle('active'); // Додайте клас .active до overlay
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay-after');
    const overlayAfter = document.querySelector('.overlay-after');
    const overlayBefore = document.querySelector('.overlay-before');
    const navList = document.querySelector('.nav-list');

    // Функція, яка приховує меню
    function hideNavMenu() {
        burgerIcon.classList.remove('active');
        navList.classList.remove('active');
        overlay.classList.remove('active');
        overlayAfter.classList.remove('active'); // Приховуємо .overlay-after
        overlayBefore.classList.remove('active'); // Приховуємо .overlay-after
    }

    // Додавання обробників подій для overlay і .overlay-after
    overlay.addEventListener('click', hideNavMenu);
    overlayAfter.addEventListener('click', hideNavMenu); // Додаємо обробник кліку для .overlay-after
    overlayBefore.addEventListener('click', hideNavMenu); // Додаємо обробник кліку для .overlay-after

});

const imagesSvVesnu2023 = [
    "349797219_102338939555492_7630231614016217589_n",
    "349673769_1416577912489363_1022524920593351762_n",
    "351332879_1214591155906383_4609552200984716964_n"
];

const imgElementSvVesnu2023 = document.querySelector('.img-SvVesnu2023');
const prevButtonSvVesnu2023 = document.getElementById('prev-button-SvVesnu2023');
const nextButtonSvVesnu2023 = document.getElementById('next-button-SvVesnu2023');

let currentIndexSvVesnu2023 = 0;

function setPhotoSvVesnu2023(index) {
    imgElementSvVesnu2023.src = imagesSvVesnu2023[index];
    imgElementSvVesnu2023.alt = `Фотографія ${index + 1}`;
}

nextButtonSvVesnu2023.addEventListener('click', () => {
    currentIndexSvVesnu2023 = (currentIndexSvVesnu2023 + 1) % imagesSvVesnu2023.length;
    setPhotoSvVesnu2023(currentIndexSvVesnu2023);
});

prevButtonSvVesnu2023.addEventListener('click', () => {
    currentIndexSvVesnu2023 = (currentIndexSvVesnu2023 - 1 + imagesSvVesnu2023.length) % imagesSvVesnu2023.length;
    setPhotoSvVesnu2023(currentIndexSvVesnu2023);
});

setPhotoSvVesnu2023(currentIndexSvVesnu2023);

imgElementSvVesnu2023.addEventListener('mouseenter', () => {
    prevButtonSvVesnu2023.style.opacity = '0.5';
    nextButtonSvVesnu2023.style.opacity = '0.5';
});

imgElementSvVesnu2023.addEventListener('mouseleave', () => {
    prevButtonSvVesnu2023.style.opacity = '0';
    nextButtonSvVesnu2023.style.opacity = '0';
});
