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

let contentIndex = 0; // Визначаємо початковий індекс для контенту

let members = [
    {
        imageSrc: "917e203c-fc85-4fc6-a185-9dfca0c52551.jpg",
        name: "Северин Яськів",
        info: "Інформація_1"
    },
    {
        imageSrc: "917e203c-fc85-4fc6-a185-9dfca0c52551.jpg",
        name: "Ярослав Кобилко",
        info: "Інформація_2"
    },
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_1.jpg",
        name: "Лев Опацький",
        info: "Інформація_3"
    },
    {
        imageSrc: "https://schtirlitz.ru/wp-content/uploads/kartinka-v-vk_1.jpg",
        name: "Левон Месропян",
        info: "Інформація_4"
    },
    // Додайте інші об'єкти для інших блоків контенту
    // ...
];

function changeMember(index) {
    // Отримуємо елементи областей, які потрібно оновити
    let leftHalf = document.querySelector('.content-half:nth-child(1)');
    let rightHalf = document.querySelector('.content-half:nth-child(2)');

    // Оновлюємо вміст для лівої половини
    leftHalf.innerHTML = `
        <img src="${members[index].imageSrc}" alt="Опис зображення">
        <h1 class="name">${members[index].name}</h1>
        <h3 class="info">${members[index].info}</h3>
    `;

    // Оновлюємо вміст для правої половини
    rightHalf.innerHTML = `
        <img src="${members[index + 1].imageSrc}" alt="Опис зображення">
        <h1 class="name">${members[index + 1].name}</h1>
        <h3 class="info">${members[index + 1].info}</h3>
    `;
}

function nextContent() {
    // Збільшуємо індекс для вибору наступного вмісту
    contentIndex += 2;
    if (contentIndex >= members.length) {
        contentIndex = 0; // Повертаємо до початку, якщо індекс за межами масиву
    }
    changeMember(contentIndex);
}

function previousContent() {
    // Зменшуємо індекс для вибору попереднього вмісту
    contentIndex -= 2;
    if (contentIndex < 0) {
        contentIndex = members.length - 2; // Повертаємо до кінця, якщо індекс від'ємний
    }
    changeMember(contentIndex);
}

// Відображаємо початковий вміст для першої пари даних
changeMember(contentIndex);
