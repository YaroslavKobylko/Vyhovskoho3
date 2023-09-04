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

const imagesPcWorld = [
    "IMG_0697.JPG",
    "IMG_9577.JPG",
    "IMG_9568.JPG"
    // Додайте шляхи до інших фотографій тут
];

const imgElementPcWorld = document.querySelector('.img-pcworld');
const prevButtonPcWorld = document.getElementById('prev-button-pcworld');
const nextButtonPcWorld = document.getElementById('next-button-pcworld');

let currentIndexPcWorld = 0;

function setPhotoPcWorld(index) {
    imgElementPcWorld.src = imagesPcWorld[index];
    imgElementPcWorld.alt = `Фотографія ${index + 1}`;
}

nextButtonPcWorld.addEventListener('click', () => {
    currentIndexPcWorld = (currentIndexPcWorld + 1) % imagesPcWorld.length;
    setPhotoPcWorld(currentIndexPcWorld);
});

prevButtonPcWorld.addEventListener('click', () => {
    currentIndexPcWorld = (currentIndexPcWorld - 1 + imagesPcWorld.length) % imagesPcWorld.length;
    setPhotoPcWorld(currentIndexPcWorld);
});

setPhotoPcWorld(currentIndexPcWorld);

imgElementPcWorld.addEventListener('mouseenter', () => {
    prevButtonPcWorld.style.opacity = '0.5';
    nextButtonPcWorld.style.opacity = '0.5';
});

imgElementPcWorld.addEventListener('mouseleave', () => {
    prevButtonPcWorld.style.opacity = '0';
    nextButtonPcWorld.style.opacity = '0';
});

// Для другого блоку
const imagesMidgard = [
    "36510048_1873201342762873_2213546897916821504_n.jpg",
    "36587802_1873201539429520_5275951020545933312_n.jpg",
    "36884069_1888548787894795_8356117946795294720_n.jpg"
];

const imgElementMidgard = document.querySelector('.img-midgard');
const prevButtonMidgard = document.getElementById('prev-button-midgard');
const nextButtonMidgard = document.getElementById('next-button-midgard');

let currentIndexMidgard = 0;

function setPhotoMidgard(index) {
    imgElementMidgard.src = imagesMidgard[index];
    imgElementMidgard.alt = `Фотографія ${index + 1}`;
}

nextButtonMidgard.addEventListener('click', () => {
    currentIndexMidgard = (currentIndexMidgard + 1) % imagesMidgard.length;
    setPhotoMidgard(currentIndexMidgard);
});

prevButtonMidgard.addEventListener('click', () => {
    currentIndexMidgard = (currentIndexMidgard - 1 + imagesMidgard.length) % imagesMidgard.length;
    setPhotoMidgard(currentIndexMidgard);
});

setPhotoMidgard(currentIndexMidgard);

imgElementMidgard.addEventListener('mouseenter', () => {
    prevButtonMidgard.style.opacity = '0.5';
    nextButtonMidgard.style.opacity = '0.5';
});

imgElementMidgard.addEventListener('mouseleave', () => {
    prevButtonMidgard.style.opacity = '0';
    nextButtonMidgard.style.opacity = '0';
});

const imagesGentelman = [
    "65558417_2444086019007733_7695747161459261440_n.jpg",
    "66110176_2444086195674382_8528562717680730112_n.jpg",
    "66149811_2444084842341184_398670048509558784_n.jpg"
];

const imgElementGentelman = document.querySelector('.img-gentelman');
const prevButtonGentelman = document.getElementById('prev-button-gentelman');
const nextButtonGentelman = document.getElementById('next-button-gentelman');

let currentIndexGentelman = 0;

function setPhotoGentelman(index) {
    imgElementGentelman.src = imagesGentelman[index];
    imgElementGentelman.alt = `Фотографія ${index + 1}`;
}

nextButtonGentelman.addEventListener('click', () => {
    currentIndexGentelman = (currentIndexGentelman + 1) % imagesGentelman.length;
    setPhotoGentelman(currentIndexGentelman);
});

prevButtonGentelman.addEventListener('click', () => {
    currentIndexGentelman = (currentIndexGentelman - 1 + imagesGentelman.length) % imagesGentelman.length;
    setPhotoGentelman(currentIndexGentelman);
});

setPhotoGentelman(currentIndexGentelman);

imgElementGentelman.addEventListener('mouseenter', () => {
    prevButtonGentelman.style.opacity = '0.5';
    nextButtonGentelman.style.opacity = '0.5';
});

imgElementGentelman.addEventListener('mouseleave', () => {
    prevButtonGentelman.style.opacity = '0';
    nextButtonGentelman.style.opacity = '0';
});
