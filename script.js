let contentIndex = 0;
let contents = [
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_1.jpg"
    },
    {
        title: "Северин Яськів",
        title2: "Скарбник",
        text: "Це права половина вмісту. Тут може бути ваш текст, що описує праву половину."
    },
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_4.jpg"
    },
    {
        title: "Губка Боб",
        title2: "Писар",
        text: "У всесвіті анімації і мультфільмів існують герої, які стають справжніми іконами поп-культури. Один із таких героїв - Губка Боб Квадратні Штани. І хоча він може бути губкою у формі квадрата, з жовтою губкою на голові, він став визнаним героєм із масштабним впливом на дітей і дорослих. Але що було б, якщо б Губка Боб був реальною людиною? Давайте розглянемо це уявлення."
    },
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_26.jpg"
    },
    {
        title: "Губка Боб",
        title2: "Скарбник",
        text: "У всесвіті анімації і мультфільмів існують герої, які стають справжніми іконами поп-культури. Один із таких героїв - Губка Боб Квадратні Штани. І хоча він може бути губкою у формі квадрата, з жовтою губкою на голові, він став визнаним героєм із масштабним впливом на дітей і дорослих. Але що було б, якщо б Губка Боб був реальною людиною? Давайте розглянемо це уявлення."
    },
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_24.jpg"
    },
    {
        title: "Губка Боб",
        title2: "Скарбник",
        text: "У всесвіті анімації і мультфільмів існують герої, які стають справжніми іконами поп-культури. Один із таких героїв - Губка Боб Квадратні Штани. І хоча він може бути губкою у формі квадрата, з жовтою губкою на голові, він став визнаним героєм із масштабним впливом на дітей і дорослих. Але що було б, якщо б Губка Боб був реальною людиною? Давайте розглянемо це уявлення."
    }
];

function changeContent(index) {
    // Отримуємо елементи областей, які потрібно оновити
    let leftHalf = document.getElementById('left-half');
    let rightHalf = document.getElementById('right-half');

    // Оновлюємо вміст лівої половини
    leftHalf.innerHTML = `
    <img src="${contents[index].imageSrc}" alt="Опис зображення">
    `;

    // Оновлюємо вміст правої половини (інший вміст)
    rightHalf.innerHTML = `
        <h1>${contents[index + 1].title}</h1>
        <h2>${contents[index + 1].title2}</h2>
        <p>${contents[index + 1].text}</p>
    `;
}

function nextContent() {
    // Збільшуємо індекс для вибору наступного вмісту
    contentIndex = (contentIndex + 2) % contents.length;
    changeContent(contentIndex);
}

function previousContent() {
    // Зменшуємо індекс для вибору попереднього вмісту
    contentIndex = (contentIndex - 2 + contents.length) % contents.length;
    changeContent(contentIndex);
}

// Відображаємо початковий вміст
changeContent(contentIndex);

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
