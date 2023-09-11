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
    "https://scontent.fiev19-1.fna.fbcdn.net/v/t39.30808-6/349797219_102338939555492_7630231614016217589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=F5iTYPnJYc8AX8Ys2eL&_nc_ht=scontent.fiev19-1.fna&oh=00_AfCB0f2AzsXQzimxHHtQ6-4ck9RLDWre46UEbJw8lFAZ-w&oe=64F8333E",
    "https://scontent.fiev19-1.fna.fbcdn.net/v/t39.30808-6/349673769_1416577912489363_1022524920593351762_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=_GQiKitV-scAX-jou6j&_nc_ht=scontent.fiev19-1.fna&oh=00_AfA7jTAB8UdIryWGE6f6VKvdePYVTjyUW_k1E-DwfCBAZA&oe=64F8CBCF",
    "https://scontent.fiev19-1.fna.fbcdn.net/v/t39.30808-6/351332879_1214591155906383_4609552200984716964_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=KIFkbRT4lhcAX_yQepb&_nc_ht=scontent.fiev19-1.fna&oh=00_AfBiEut0qSjBilkWfl-OpCT5uqoqJUU6o1clE_Vzr9-JuQ&oe=64F8CEE6"
    // Додайте шляхи до інших фотографій тут
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
