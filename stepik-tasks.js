
/* 1. Создайте программу, которая будет проверять, является ли введенное пользователем число четным. 
Если число четное, программа должна выводить сообщение "Число четное", в противном случае ничего не выводить. */
let num = Number(prompt("Введите число")); 
if (num % 2 === 0) {
    console.log("Число четное");
};

/* 2. Напишите программу, которая проверяет, является ли введенное пользователем число четным и положительным одновременно. 
Если введенное число больше нуля и оно четное, то выводится сообщение "Четное и положительное". */ 
Если одно из условий не выполняется, ничего не выводится.
let num = Number(prompt("Введите число"));
if (num > 0 && num % 2 === 0) {
    console.log("Четное и положительное");
};

/* 3. Напишите программу, которая проверяет, является ли введенное пользователем число трехзначным. 
Если введенное число трехзначное, то выводится сообщение "Трехзначное". 
Если число не удовлетворяет этому условию, ничего не выводится. */
let num = Number(prompt("Введите число"));
if ((num/100) >= 1 && (num/100) < 10) {
    console.log("Трехзначное");
};

/* 4. Напишите программу, которая проверяет, является ли введенное пользователем число четным, и выводит
 сообщение "Число четное", если число четное или "Число нечетное", если число нечетное. */
let num = Number(prompt("Введите число"));
if (num % 2 === 0) {
    console.log("Число четное");
} else {
    console.log("Число нечетное");
}

/* 5. Напишите программу, которая проверяет, является ли введенное пользователем число положительным или отрицательным. 
Если число положительное, программа выводит сообщение "Положительное", 
если отрицательное - выводит "Отрицательное", 
если ноль - выводит "Не положительное и не отрицательное". */
let num = Number(prompt("Введите число"));
if (num > 0) {
    console.log("Положительное");
} else if (num < 0) {
    console.log("Отрицательное");
} else {
    console.log("Не положительное и не отрицательное");
}

/* 6. Вы разрабатываете программу для оценки учеников. У вас есть переменная score, представляющая баллы,
полученные учеником за тест, которые вводит пользователь. 
Вам нужно вывести сообщение в зависимости от количества баллов:
-> Если score больше или равно 84, выведите "Отлично"
-> Если score больше или равно 64, выведите "Хорошо"
-> В остальных случаях (меньше 64) выведите "Учись".
*/
let score = Number(prompt("Введите количество баллов"));
if (score >= 84) {
    console.log("Отлично");
} else if (score >= 64) {
    console.log("Хорошо");
} else {
    console.log("Учись");
}

/* 7. Напишите программу, которая оценивает текущее время суток на основе введенного пользователем часа. Используйте конструкцию if, чтобы вывести сообщение в зависимости от введенного времени: 
-> Если часы от 0 до 11, выведите "Доброе утро"
-> Если часы от 12 до 17, выведите "Добрый день"
-> Если часы от 18 до 23, выведите "Добрый вечер"
*/
let currentTime = Number(prompt("Введите текущий час"));
if (currentTime >= 0 && currentTime <= 11) {
    console.log("Доброе утро");
} else if (currentTime >= 12 && currentTime <= 17) {
    console.log("Добрый день");
} else if (currentTime >= 18 && currentTime <= 23) {
    console.log("Добрый вечер");

/* 8. Напишите программу для оценки настроения на основе введенного пользователем числа от 1 до 10.
-> 1-3 - программа выводит "Плохое" 
-> 4-7 - программа выводит "Нормальное"
-> 8-10 - программа выводит "Хорошее"
Если пользователь ввел число вне диапазона, программа выводит "Число вне диапазона". */
let userMood = Number(prompt("Введите оценку Вашего настроения числом от 1 до 10"));
if (userMood >= 1 && userMood <= 3) {
    console.log("Плохое");
} else if (userMood >= 4 && userMood <= 7) {
    console.log("Нормальное");
} else if (userMood >= 8 && userMood <= 10) {
    console.log("Хорошее");
} else {
    console.log("Число вне диапазона");
}

/* 9. Напишите программу, которая по введенным от пользователя длинам сторон треугольника определяет его вид: равносторонний, равнобедренный или разносторонний.
-> Если все три стороны равны, то это равносторонний треугольник.
-> Если любые две из трех сторон равны, то это равнобедренный треугольник.
-> Если ни одно из условий выше не выполняется, то это разносторонний треугольник. */

let side1 = Number(prompt("Введите длину стороны 1"));
let side2 = Number(prompt("Введите длину стороны 2"));
let side3 = Number(prompt("Введите длину стороны 3"));
if (side1 === side2 && side2 === side3) {
    console.log("Равносторонний");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Равнобедренный");
} else {
    console.log("Разносторонний");
}

