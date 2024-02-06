
/* 1. Создайте программу, которая будет проверять, является ли введенное пользователем число четным. 
Если число четное, программа должна выводить сообщение "Число четное", в противном случае ничего не выводить. */
let num = Number(prompt("Введите число")); 
if (num % 2 === 0) {
    console.log("Число четное");
};

// ========================================================================================================
/* 2. Напишите программу, которая проверяет, является ли введенное пользователем число четным и положительным одновременно. 
Если введенное число больше нуля и оно четное, то выводится сообщение "Четное и положительное". */ 
Если одно из условий не выполняется, ничего не выводится.
let num = Number(prompt("Введите число"));
if (num > 0 && num % 2 === 0) {
    console.log("Четное и положительное");
};

// ========================================================================================================
/* 3. Напишите программу, которая проверяет, является ли введенное пользователем число трехзначным. 
Если введенное число трехзначное, то выводится сообщение "Трехзначное". 
Если число не удовлетворяет этому условию, ничего не выводится. */
let num = Number(prompt("Введите число"));
if ((num/100) >= 1 && (num/100) < 10) {
    console.log("Трехзначное");
};

// ========================================================================================================
/* 4. Напишите программу, которая проверяет, является ли введенное пользователем число четным, и выводит
 сообщение "Число четное", если число четное или "Число нечетное", если число нечетное. */
let num = Number(prompt("Введите число"));
if (num % 2 === 0) {
    console.log("Число четное");
} else {
    console.log("Число нечетное");
}

// ========================================================================================================
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

// ========================================================================================================
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

// ========================================================================================================
/* 7. Напишите программу, которая оценивает текущее время суток на основе введенного пользователем часа. 
Используйте конструкцию if, чтобы вывести сообщение в зависимости от введенного времени: 
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

// ========================================================================================================
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

// ==========================================================================================================
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

// ========================================================================================================
/* 10. Создайте программу для определения класса подходящего автомобиля на основе его длины и объема двигателя.
Запросите у пользователя сначала длину автомобиля, а затем объем двигателя. 
Используя условные операторы, определите, к какому классу автомобиля он относится:
-> Если длина меньше или равно 3.8 м и объем двигателя меньше или равно 1.2 л, результат - "Класс A".
-> Если длина меньше или равно 4 м и объем двигателя меньше или равно 1.6 л, результат - "Класс B".
-> Если длина меньше или равно 4.5 м и объем двигателя от 1.6 до 2 л включительно, результат - "Класс C".
-> В противном случае, результат - "Выберите автомобиль другого класса".
!Названия классов (A, B, C) пишутся на английском языке. */

let length = Number(prompt("Введите длину автомобиля"));
let engine = Number(prompt("Введите объем двигателя автомобиля"));

if (length <= 3.8 && engine <= 1.2) {
    console.log("Класс A");
} else if (length <= 4 && engine <= 1.6) {
    console.log("Класс B");
} else if (length <= 4.5 && engine > 1.6 && engine <= 2) {
    console.log("Класс C");
} else {
    console.log("Выберите автомобиль другого класса");
}

// ========== Тернарный оператор ===========

/* 11. Напишите программу для проверки доступа пользователя к контенту на сайте, основываясь на возрасте, который он ввел самостоятельно. 
Используя тернарный оператор, напишите условие, руководствуясь следующими данными:
-> Если возраст больше или равен 18, результат - "Доступ разрешен".
-> В противном случае, результат - "Доступ запрещен". */

let age = Number(prompt("Введите ваш возраст:"));
let access = (age >= 18) ? "Доступ разрешен" : "Доступ запрещен"
console.log(access);

// ========================================================================================================
/* 12. Создайте программу для вычисления стоимости доставки товара в зависимости от его веса. 
Запросите у пользователя вес товара. Используя тернарный оператор, определите стоимость доставки в зависимости от введенного веса:
-> Если вес товара менее или равен 5 кг, стоимость - 200 рублей.
-> Если вес товара больше 5 кг, стоимость - 350 рублей. */

let productWeight = Number(prompt("Введите вес товара:"));
let deliveryCost = (productWeight <= 5) ? "200 рублей" : "350 рублей";
console.log("Стоимость доставки: " + deliveryCost);

// ========================================================================================================
/* 13. Создайте программу для определения, является ли день недели выходным. 
Получите от пользователя номер дня недели (целое число от 1 до 7, где 1 - понедельник, 7 - воскресенье). 
Используя тернарный оператор, определите, является ли этот день выходным, и выведите соответствующее сообщение:
-> Если номер дня равен 6 или 7, результат - "Выходной".
-> В противном случае, результат - "Рабочий день". */

let dayNumber = Number(prompt("Введите день недели числом от 1 до 7:"))
let whatDay = (dayNumber === 6 || dayNumber === 7) ? "Выходной" : "Рабочий день";
console.log(whatDay);

// ========================================================================================================
/* 14. Создайте программу для оценки достижения пользователем цели. 
Пользователь вводит два числа: сначала количество выполненных задач, а затем количество поставленных изначально задач. 
Используя тернарный оператор, определите, достиг ли пользователь своей цели, и выведите соответствующее сообщение.
-> Если количество выполненных задач больше или равно количеству поставленных изначально задач, выводится "Цель достигнута".
-> В противном случае, выводится "Цель не достигнута". */

let executedTasks = Number(prompt("Введите количество выполненных задач:"));
let amountOfTasks = Number(prompt("Введите количество поставленных изначально задач:"));
let rating = (executedTasks >= amountOfTasks) ? "Цель достигнута" : "Цель не достигнута";
console.log(rating); 

// ========================================================================================================
/* 15. Создайте программу для оценки скидки на товар в зависимости от его цены и статуса покупателя. 
Получите от пользователя сначала ЦЕНУ товара а затем СТАТУС покупателя (обычный или VIP). 
Используя вложенные условные операторы, выведите какую скидку получает покупатель:
-> Если цена товара больше 1000 рублей:
-> Если статус покупателя VIP, выводится итоговая стоимость со скидкой 10%
-> Если статус покупателя не VIP, выводится итоговая стоимость со скидкой 5%.
-> Если цена товара 1000 рублей или меньше, выводится цена товара без изменений, независимо от его статуса. */

let price = Number(prompt("Введите цену товара:"));
let status = prompt("Введите Ваш статус покупателя:");
let resultCost;
if (price > 1000) {
    if (status === "VIP") {
        resultCost = price * 0.9;
    } else {
        resultCost = price * 0.95;
    }
} else {
    resultCost = price;
}
console.log(resultCost);

// ========================================================================================================
/* 16. Создайте программу для оценки стоимости доставки товара в зависимости от его веса и статуса доставки. 
Запросите от пользователя вес товара и статус доставки (обычная или экспресс). 
Используя вложенные условные операторы, выведите стоимость доставки в зависимости от введенных данных:
-> Если вес товара меньше или равен 5 кг:
-> Если статус доставки экспресс, стоимость - 1000 рублей.
-> Если статус доставки обычная, стоимость - 500 рублей.
-> Если статус доставки не экспресс и не обычная, выведите "Некорректный статус доставки".
-> Если вес товара больше 5 кг:
-> Если статус доставки экспресс, стоимость - 1500 рублей.
-> Если статус доставки обычная, стоимость - 800 рублей.
-> Если статус доставки не экспресс и не обычная, выведите "Некорректный статус доставки". */

let weight = Number(prompt("Введите вес товара:"));
let deliveryStatus = prompt("Введите статус доставки:");
let result;
if (weight <= 5) {
    if (deliveryStatus === "экспресс") {
        result = "Стоимость доставки: 1000 рублей";
    } else if (deliveryStatus === "обычная") {
        result = "Стоимость доставки: 500 рублей";
    } else {
        result = "Некорректный статус доставки";
    }
} else if (weight > 5) {
    if (deliveryStatus === "экспресс") {
        result = "Стоимость доставки: 1500 рублей";
    } else if (deliveryStatus === "обычная") {
        result = "Стоимость доставки: 800 рублей";
    } else {
        result = "Некорректный статус доставки";
    }
}
console.log(result);

// ========================================================================================================
/* 17. Создайте программу для оценки времени года на основе текущего месяца и температуры. 
Запросите у пользователя номер текущего месяца (от 1 до 12) и температуру на улице (в градусах Цельсия). 
Используя вложенные условные операторы, выведите, к какому времени года относится введенный месяц:
-> Если месяц - декабрь, январь или февраль, выведите "Зима".
-> Если температура -25 и ниже градусов, добавьте к времени года " (холодная зима)".
-> Если месяц - март, апрель или май, выведите - "Весна".
-> Если температура меньше 15 градусов, добавьте к времени года " (прохладная весна)"
-> Если месяц - июнь, июль или август, выведите "Лето".
-> Если температура больше или равна 30 градусов,  добавьте к времени года " (жаркое лето)".
-> Если месяц - сентябрь, октябрь или ноябрь, выведите "Осень".
-> Если температура меньше 0 градусов, добавьте к времени года " (прохладная осень)". */

let monthNumber = Number(prompt("Введите номер текущего месяца:"));
let outsideTemper = Number(prompt("Введите температуру на улице:"));
let result;
if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    result = "Зима";
    if (outsideTemper <= -25) {
        result += " (холодная зима)";
    }
} 
else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    result = "Весна";
    if (outsideTemper < 15) {
        result += " (прохладная весна)";
    }
}
else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    result = "Лето";
    if (outsideTemper >= 30) {
        result += " (жаркое лето)";
    }
}
else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    result = "Осень";
    if (outsideTemper < 0) {
        result += " (прохладная осень)";
    }
}
console.log(result);

/* 18. Перед вами программа, которая должна выводить каждое четное число по порядку от 0 до заданного пользователем числа (включительно). 
Напишите вместо многоточия правильное тело цикла. Не используйте условные конструкции. */

let targetNumber = Number(prompt("Введите число, до которого нужно считать:")); 
let currentNumber = 0;

while (currentNumber <= targetNumber) {
   console.log(currentNumber);
   currentNumber += 2;
}

/* 19. Напишите программу, которая будет запрашивать у пользователя число, а затем вычислять его факториал, 
с помощью цикла while.
Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа. 
Например, факториал числа 5 будет равен 1 × 2 × 3 × 4 × 5 = 120 */

let num = Number(prompt("Введите число:"));
let count = 1;
let j = 1;
while (count <= num) {
    j *= count;
    count ++;
}
console.log("Факториал числа " + num + " равен " + j);

/* 20. Напишите программу, которая просит у пользователя число, а затем выводит умножение этого числа на числа от 1 до 10. */

let num = Number(prompt("Введите число"));
let i = 1;
while(i <= 10) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
}

/* 21. Напишите программу, которая запрашивает у пользователя сначала число num1, а затем число num2. 
Если num1 больше num2, программа выводит все числа по порядку от num1 до num2 включительно от большего к меньшему. 
Если num1 меньше num2, программа выводит все числа по порядку от num1 до num2 включительно от меньшего к большему. */

let num1 = Number(prompt("Введите число 1"));
let num2 = Number(prompt("Введите число 2"));

if (num1 < num2) {
    while (num1 <= num2) {
        console.log(num1);
        num1 += 1;
    }
}
else if (num1 > num2) {
    while (num1 >= num2) {
        console.log(num1);
        num1 -= 1;
    }
}


/* 22. Напишите программу, которая запрашивает у пользователя сначала число num1, а затем число num2. 
Если num1 больше num2, программа выводит все числа, кратные 3, по порядку от num1 до num2 включительно от большего к меньшему. 
Если num1 меньше num2, программа выводит все числа, кратные 3, от num1 до num2 включительно от меньшего к большему. */

let num1 = Number(prompt("Введите число 1"));
let num2 = Number(prompt("Введите число 2"));
if (num1 < num2) {
    while (num1 <= num2) {
        if (num1 % 3 === 0) {
           console.log(num1); 
        }
        num1 += 1;
    }
}
else if (num1 > num2) {
    while (num1 >= num2) {
        if (num1 % 3 === 0) {
           console.log(num1); 
        }
        num1 -= 1;
    }
}

/* 23. Напишите программу, которая будет запрашивать у пользователя целое число N. 
Затем программа должна вычислить и вывести результат возведения числа 2 в степень N. 
Реализуйте программу с помощью цикла while. */

let n = Number(prompt("Введите целое число"));
let result = 1;
let i = 1;
while (i <= n) {
    result *= 2;
    i++;
}
console.log(result);

/* 24. Попросите пользователя ввести число. 
Затем используя цикл while, умножайте это число на 2 до тех пор, пока оно не превысит 1000. 
Выведите на экран итоговое число и количество итераций (сколько раз вы умножили исходное число на 2). */

let n = Number(prompt("Введите целое число"));
let i = 0;
while (n <= 1000) {
    n *= 2;
    i++;
}
console.log("Итоговое число: " + n);
console.log("Количество итераций: " + i);

/* 25. Напишите программу, которая должна запрашивать у пользователя число. 
Затем программа должна вывести все четные числа от 2 до введенного числа включительно. */

let n = Number(prompt("Введите целое число:"));
for (let i = 2; i <= n; i += 2) {
  console.log(i);
}

/* 26. Напишите программу, которая должна запрашивать у пользователя два целых числа: начальное и конечное значения диапазона. 
Затем программа должна вычислить и вывести сумму всех чисел в указанном диапазоне. */

let start = Number(prompt("Введите начальное значение диапазона:"));
let end = Number(prompt("Введите конечное значение диапазона:"));
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}
console.log(sum);

/* 27. Напишите программу, которая 61 раз выводит слово "Поехали", используя цикл for. */
for (let i = 1; i <= 61; i++) {
    console.log("Поехали");
}

/* 28. Напишите программу, которая будет запрашивать у пользователя два целых числа, начальное значение A и конечное значение B. 
Затем программа должна вывести на экран все целые числа в диапазоне от B до A в обратном порядке. */

let a = Number(prompt("Введите начальное значение диапазона:"));
let b = Number(prompt("Введите конечное значение диапазона:"));
for (let i = b; i >= a; i--) {
    console.log(i);
}

/* 29. Напишите программу для моделирования увеличения суммы вклада в банке, который удваивается каждый месяц. 
Пользователь должен ввести первоначальную сумму вклада и количество месяцев. 
Программа должна выводить данные о вкладе за каждый месяц. */ 

let sum = Number(prompt("Введите сумму вклада:"));
let num = Number(prompt("Введите количество месяцев:"));
for (let i = 1; i <= num; i++) {
    console.log("Месяц " + i + ": " + sum);
    sum *= 2;
}

/* 30. Напишите программу, которая будет запрашивать у пользователя число. 
Затем программа должна вычислить и вывести сумму всех нечетных чисел от 1 до введенного числа включительно. */

let num = Number(prompt("Введите число:"));
let result = 0;
for (let i = 1; i <= num; i+=2) {
    result += i;
}
console.log("Сумма нечетных чисел от 1 до " + num + " равна " + result);

/* 31. Напишите программу, которая будет запрашивать у пользователя число X. 
Затем программа должна подсчитать количество четных и нечетных чисел в диапазоне от 1 до X включительно и вывести результат. */

let x = Number(prompt("Введите число:"));
let evenNum = 0;
let oddNum = 0;
for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) {
        oddNum += 1;
    }
    else {
        evenNum += 1;
    }
}
console.log("Количество четных чисел: " + evenNum);
console.log("Количество нечетных чисел: " + oddNum);

/* 32. Объявите функцию, в которой будет содержаться инструкция вывода сообщения "Терпение и труд". 
Вызовите эту функцию. */

function workHard() {
    console.log("Терпение и труд");
}
workHard();

/* 33. Объявите функцию, в которой будут содержаться инструкции запроса числа от пользователя и вывода 
квадрата этого числа. Вызовите эту функцию. */

function squareNum() {
    let num = Number(prompt("Введите число:"));
    console.log(num ** 2);
}
squareNum();

/* 34. Напишите программу, которая запрашивает у пользователя его имя и возраст, затем объявляет функцию,
которая принимает имя и возраст как параметры и выводит на экран персонализированное приветствие. 
Вызовите функцию. */
let name = prompt("Введите Ваше имя:");
let age = Number(prompt("Введите Ваш возраст:"));
function greetUser(name, age) {
    console.log("Привет, " + name + ". Тебе " + age + " лет.");
}
greetUser(name, age);

/* 35. Напишите программу, которая запрашивает у пользователя число, а затем объявите функцию, 
которая принимает это число как параметр и выводит его факториал на экран. Вызовите функцию. */
let n = Number(prompt("Введите число:"));
function getFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    console.log(result);
}
getFactorial(n);

/* 36. Напишите программу, которая запрашивает у пользователя два числа и сравнивает их. 
Затем объявите функцию, которая принимает два числа как параметры и выводит на экран сообщение о том, 
какое число больше. */
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " больше, чем " + num2);
    }
    else if (num2 > num1) {
        console.log(num2 + " больше, чем " + num1);
    }
    else {
        console.log(num1 + " равно " + num2);
    }
}
compareNumbers(num1, num2);


/* 37. Напишите программу, которая запрашивает у пользователя четыре числа и объявляет функцию compareAndPrintMax. 
Эта функция принимает четыре числа как параметры и сравнивает их, затем выводит сообщение о том, какое число больше. */
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
let num4 = Number(prompt("Введите четвертое число:"));
function compareAndPrintMax(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4) {
        console.log(num2);
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4) {
        console.log(num3);
    }
    else {
        console.log(num4);
    }
}
compareAndPrintMax(num1, num2, num3, num4);

/* 38. Напишите программу, которая запрашивает у пользователя два числа и операцию ( +, -, * или / ). 
Затем объявите функцию, которая принимает два числа и операцию как параметры и выводит на экран результат выполнения выбранной операции. 
Если пользователь ввел неверный оператор, программа выводит "Неверный оператор". */

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let operat = prompt("Введите используемую операцию:");
function calculate(num1, num2, operat) {
    if (operat == "*") {
        console.log(num1 * num2);
    }
    else if (operat == "/") {
        console.log(num1 / num2);
    }
    else if (operat == "+") {
        console.log(num1 + num2);
    }
    else if (operat == "-") {
        console.log(num1 - num2);
    }
    else {
        console.log("Неверный оператор");
    }
}
calculate(num1, num2, operat);

/* 39. Напишите программу, которая запрашивает у пользователя три числа и объявляет функцию, 
которая принимает три числа как параметры и возвращает их среднее арифметическое. 
Выведите удвоенное значение среднего арифметического. */

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
function compareAndPrintMax(num1, num2, num3) {
    return (num1 + num2 + num3)/3
}
let doubleMid = compareAndPrintMax(num1, num2, num3) * 2;
console.log(doubleMid);

/* 40. Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две функции: findMax и compareMax. 
Функция findMax принимает два числа как параметры и возвращает большее из них. 
Функция compareMax принимает результаты нахождения максимума из двух наборов чисел как параметры и выводит сообщение о том, какое число больше. */
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
let num4 = Number(prompt("Введите четвертое число:"));

function findMax(a, b) {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
}

let max1 = findMax(num1, num2);
let max2 = findMax(num3, num4);

function compareMax(max1, max2) {
    if (max1 > max2) {
        console.log("Максимальное число первого набора больше");
    }
    else if (max2 > max1) {
        console.log("Максимальное число второго набора больше");
    }
    else {
        console.log("Максимальные числа наборов равны");
    }
}
compareMax(max1, max2);

/* 41. Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две функции: calculateAverage и compareAverages. 
Функция calculateAverage принимает два числа как параметры и возвращает их среднее арифметическое. 
Функция compareAverages принимает результаты средних значений из двух наборов чисел как параметры и выводит сообщение о том, какое среднее значение больше. */

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
let num4 = Number(prompt("Введите четвертое число:"));

function calculateAverage(a, b) {
    return(a + b)/2
}

let average1 = calculateAverage(num1, num2);
let average2 = calculateAverage(num3, num4);

function compareAverages(average1, average2) {
    if (average1 > average2) {
        console.log("Среднее значение первого набора больше");
    }
    else if (average2 > average1) {
        console.log("Среднее значение второго набора больше");
    }
    else {
        console.log("Средние значения наборов равны");
    }
}
compareAverages(average1, average2);

/* 42. Напишите программу, которая запрашивает у пользователя длины трех сторон треугольника и объявляет функцию checkTriangleExistence, 
которая принимает длины сторон в качестве параметров и возвращает сообщение о том, существует ли треугольник с такими сторонами или нет.
Чтобы проверить треугольник на существование, нужно сравнить каждую сторону с суммой двух других. 
Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, то треугольника с такими сторонами НЕ существует. */

let side1 = Number(prompt("Введите длину первой стороны:"));
let side2 = Number(prompt("Введите длину второй стороны:"));
let side3 = Number(prompt("Введите длину третьей стороны:"));

function checkTriangleExistence(a, b, c) {
    if (a < (b + c) && b < (a + c) && c < (b + a)) {
        console.log("Треугольник существует");
    }
    else {
        console.log("Треугольник не существует");
    }
}

checkTriangleExistence(side1, side2, side3);

/* 43. Напишите программу, которая проверяет является ли введенное число четным, используя функциональное выражение. 
Напишите инструкцию вызова этой функции и вывода возвращаемого функцией результата. */

let a = Number(prompt());
let isEven = function(num){
     return num % 2 === 0;
}
console.log(isEven(a));

/* 44. Перепишите код из предыдущего шага, используя стрелочные функции. */
let a = Number(prompt());
let isEven = num => num % 2 === 0;
console.log(isEven(a));

/* 45. Напишите программу, которая запрашивает у пользователя число и объявляет стрелочную функцию, которая принимает число в качестве параметра и возвращает куб этого числа. */
let num = Number(prompt());
let thirdPower = n => n ** 3;
console.log(thirdPower(num));

/* 46. Напишите программу, которая запрашивает у пользователя площадь основания S и высоту h, 
затем позволяет выбрать для какой фигуры найти объем: для цилиндра или для конуса. 
Затем объявляются две стрелочные функции: calculateCylinderVolume и calculateConeVolume, каждая из которых
принимает параметры фигуры и возвращает объем.
Объем цилиндра = площадь основания * высота
Объем конуса = 1/3 * площадь основания * высота  */
let s = Number(prompt("Введите площадь основания фигуры:"));
let h = Number(prompt("Введите высоту фигуры:"));
let figure = prompt("Введите тип фигуры (цилиндр или конус):");

let calculateCylinderVolume = (s, h, figure) => s * h;
let calculateConeVolume = (s, h, figure) => 1/3 * s * h;
    
if (figure == "цилиндр") {
    console.log("Объем цилиндра: " + calculateCylinderVolume(s, h, figure));
}
if (figure == "конус") {
    console.log("Объем конуса: " + calculateConeVolume(s, h, figure));
}


/*        ==================== О Б Ъ Е К Т Ы ==================         */

/* 47. Перед вами объект, в который записывается информация от пользователя об автомобиле. 
Выведите эту информацию в соответствии с заявленным форматом. 
Sample Input 1: 
Audi
A6
Sample Output 1:
Audi A6
*/

const brand = prompt();
const model = prompt();
let car = {
  brand,
  model,
};
console.log(car.brand, car.model);

/* 48. Создайте объект trip с информацией о путешествии. Попросите пользователя ввести следующие данные о путешествии:
1.	Место назначения.
2.	Дату начала путешествия.
3.	Длительность путешествия (в днях).
Затем программа использует этот объект для вывода информации о путешествии. */

let location = prompt("Введите место назначения:");
let date = prompt("Введите дату начала путешествия:");
let duration = prompt("Введите длительность путешествия (в днях):");
let trip = {
    location,
    date,
    duration
};
console.log(trip.date, "вы отправляетесь в", trip.location, "на", trip.duration, "дней");

/* 49. Создайте объект book с информацией о книге. Попросите пользователя ввести следующие данные о книге:
1.	Название книги.
2.	Автор книги.
3.	Год издания книги.
Затем напишите программу, которая использует этот объект для вывода информации о книге в заявленном формате. */
let title = prompt("Введите название книги");
let author = prompt("Введите имя автора книги");
let year = prompt("Введите год издания книги");
let book = {
    title,
    author,
    year
};
console.log("Название книги:", book.title);
console.log("Автор книги:", book.author);
console.log("Год издания книги:", book.year);

/* 50. Перед вами объект catalogue, в котором содержится свойство magazine: 5. 
Удалите это свойство из объекта и добавьте в объект свойство newspaper с числовым значением, которое пользователь вводит самостоятельно. 
Выведите значение свойства newspaper. */
const catalogue = {
    magazine: 5,
}
delete catalogue.magazine;
catalogue.newspaper = Number(prompt("Введите количество газет"));
console.log(catalogue.newspaper);

/* 51. Перед вами объект catalogue, в котором содержится свойство magazine: 5. 
Измените значение этого свойства на вводимое пользователем числовое значение и выведите его, но только если оно не меньше 10 и не больше 50. 
Если введенное значение находится вне данного диапазона, сообщите об этом пользователю в заявленном формате. */
const catalogue = {
    magazine: 5,
}
catalogue.magazine = Number(prompt("Введите количество журналов"));
if (catalogue.magazine >= 10 && catalogue.magazine <= 50) {
    console.log(catalogue.magazine);
} else {
    console.log("Введите число в диапазоне от 10 до 50 включительно");
}

/* 52. Создайте объект c единственным методом, который принимает два числа, введенных пользователем, 
как параметры и выводит остаток от деления первого числа на второе. */
let num1 = Number(prompt("Введите число 1"));
let num2 = Number(prompt("Введите число 2"));

let obj = {
    myMethod(a, b) {
        console.log(a % b);
    }
};
obj.myMethod(num1, num2);

/* 53. Перед вами программа, которая должна запрашивать баланс банковского счета у пользователя и выводить
сообщение о балансе в заявленном формате. Вставьте вместо многоточия объявление метода для объекта. */
const balance = Number(prompt())        
let bankAccount = {
	balance,
	checkBalance() {
      console.log("Ваш текущий баланс:", balance, "долларов");
	}
};
bankAccount.checkBalance();

/* 54. Перед вами объект, который содержит значение основания. 
Добавьте в объект метод, который принимает от пользователя число Y, как параметр и возводит число Y - 2 в степень Y. 
Напишите инструкции ввода числа Y и вывода результата выполнения метода. */

let Y = Number(prompt("Введите число"));
const calculator = {
    base: Y - 2,
    power(Y) {
        console.log(this.base ** Y);
    }
};
calculator.power(Y);

/* 55. Напишите программу, которая сперва запрашивает у пользователя сумму, а потом спрашивает, какую
операцию он хочет с ней совершить: внести эту сумму на счет или снять эту сумму со счета. 
Если сумма снятия превышает баланс, программа выводит сообщение о недостатке средств. */
let bankAccount = {
  balance: 500,

  deposit: function(amount) {
    console.log(bankAccount.balance + amount);
  },
    
  withdraw: function(amount) {
    if (amount > bankAccount.balance) {
        console.log("Недостаточно средств на счете");
    }
    else {
        console.log(bankAccount.balance - amount);
    }
  }
};

const amount = Number(prompt("Введите сумму"));
const choice = prompt("Введите тип операции");
if (choice === "внести") {
    bankAccount.deposit(amount);
} else if (choice === "снять") {
   bankAccount.withdraw(amount);
}

// =============== Интерполяция ==============

/* 56. Выведите следующий диалог, используя только одну инструкцию console.log(), кавычки и спецсимволы
Да?
Алё!
Да да?
Ну как там с "деньгами"?
А?
Как с "деньгами"-то там?
Чё с "деньгами"?
Чё?
*/
console.log(`Да?\nАлё!\nДа да?\nНу как там с \"деньгами\"?\nА?\nКак с \"деньгами\"-то там?\nЧё с \"деньгами\"?\nЧё?`);

/* 57. Перед вами программа, которая выводит информацию о личности в определенном формате, взяв ее из объекта, 
свойства которого вводятся пользователем. 
Вместо многоточия вставьте интерполированную строку правильным образом. */
const person = {};
person.name = prompt();
person.age = Number(prompt());
const info = `Имя: ${person.name}, Возраст: ${person.age} лет`;
console.log(info);


/* 58. Создайте объект budget со свойствами income (доход) и expenses (расходы), значения которых вводятся 
пользователем и методом calculateProfit, который высчитывает прибыль по следующей формуле:
-->   Прибыль = доход - расходы
Если прибыль положительная, программа выводит значение прибыли. 
Если прибыль равна нулю, программа выводит сообщение о том, что пользователь отработал в ноль. 
Если прибыль отрицательна, программа выводит насколько пользователь ушел в минус. 
Используйте интерполяцию. */

let income = Number(prompt("Введите сумму доходов"));
let expenses = Number(prompt("Введите сумму расходов"));

const budget = {
    income,
    expenses,
    calculateProfit() {
        let profit = this.income - this.expenses;
        if(profit > 0) {
            console.log(`Ваша прибыль составляет ${profit} рублей`);
        } else if(profit < 0) {
            console.log(`Вы ушли в минус на ${profit - profit - profit} рублей`);
        } else {
            console.log(`Вы отработали в ноль`);
        }
    }
};
budget.calculateProfit();

/* 59. Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара и 
выводит сообщение в определенном формате с помощью функции calculateTotal с тремя параметрами. 
Напишите функцию calculateTotal. Используйте интерполяцию. */
const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(itemName, itemPrice, quantity) {
    let result = itemPrice * quantity;
    return(`Вы выбрали ${quantity} товаров \"${itemName}\" по цене ${itemPrice} рублей за штуку. Итого: ${result} рублей.`);
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);

/* 60. Перед вами та же программа, но теперь формат вывода сообщения изменен. 
Напишите функцию с одной инструкцией console.log(), в которой должны быть использованы спецсимволы. */
const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(itemName, itemPrice, quantity) {
    return(`Вы выбрали \"${itemName}\" по цене ${itemPrice} рублей за штуку.\nКоличество: ${quantity} шт.\nИтого: ${itemPrice * quantity} рублей.`);
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);

/* 61. Попросите пользователя ввести строку. Если длина строки меньше 5 символов, добавьте к строке "!" и 
выведите результат, иначе добавьте к строке "?" и также выведите результат. */

const str = prompt("Введите предложение");
if (str.length < 5) {
    console.log(`${str}!`);
} else {
    console.log(`${str}?`);
}

/* 62. Напишите программу, которая запрашивает ввод строки. 
Если эта строка содержит символ "д" или символ "н", топрограмма выводит всю строку в верхнем регистре, 
а иначе выводится строка в нижнем регистре. */
const str = prompt("Введите предложение");
if (str.includes("д") || str.includes("н")) {
    console.log(str.toUpperCase());
} else {
    console.log(str.toLowerCase());
}

/* 63. Напишите программу, которая запрашивает ввод строки. 
Если эта строка начинается с буквы "ж" в верхнем или нижнем регистре, программа выводит длину строки, 
а иначе выводится сообщение "Попробуйте снова". 
Используйте метод startsWith. */
const str = prompt("Введите предложение");
if (str.startsWith("Ж") || str.startsWith("ж")) {
    console.log(str.length);
} else {
    console.log("Попробуйте снова");
}

/* 64. Перед вами программа, которая запрашивает у пользователя строку, а затем выводит каждый символ этой 
строки на отдельной строке в нижнем регистре. Вставьте вместо многоточия верное выражение. */
const sentence = prompt();
for (let i = 0; i < sentence.length; i++) {
  console.log(sentence[i].toLowerCase());
}

/* 65. Напишите программу, которая запрашивает у пользователя строку, а затем выводит на экран последние два символа этой строки. 
Если строка состоит из меньше, чем 2 символов, выведите сообщение о том, что строка слишком короткая. */
let str = prompt("Введите слово");
if (str.length >= 2) {
    console.log(str.slice(-2));
} else {
    console.log("Введенная строка слишком короткая");
}

/* 66. Напишите программу, которая запрашивает у пользователя ввод произвольной строки, а затем 
выводит каждый второй символ этой строки на отдельной строке в верхнем регистре. */
let str = prompt("Введите слово");
for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
        console.log(str[i].toUpperCase());
    }
}
