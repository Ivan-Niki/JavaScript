
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
