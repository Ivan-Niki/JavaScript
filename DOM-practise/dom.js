// Создать div
const div = document.createElement('div');

// Добавить к нему класс wrapper
div.classList.add('wrapper');

// Поместить его внутрь тэга bode
const body = document.querySelector('body');
/* или второй вариант: const body = document.body (тоже работает в данном случае) */
body.appendChild(div);


// Создать заголовок H1 "DOM Document Object Model"


// Добавить H1 перед div с классом wrapper

console.log(div);
// 