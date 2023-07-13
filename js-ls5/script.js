// for (let i = 1; i <= 10; i += 1) {
//   console.log(`${i} Hello world!`);
// }

let car1 = "BMW";
let car2 = "Mercedes";
let car3 = "Infinity";

const cars = ["BMW", "Mercedes", "Infinity", "Honda"];
//! Індексація елементів масиву завжди починається з 0
//! Не створюйте масиви з різними типами даних
//! const - створює константу (змінна, значення якої змінити неможливо)

console.log(cars[0]); // BMW
console.log(cars[1]); // Mercedes
console.log(cars[2]); // Infinity
console.log(cars[3]); // Honda

cars[1] = "Cherry";

console.log(cars[1]); // Cherry
console.log(cars[100]); // undefined

console.log(cars);

console.log(cars.length); // 4 - виводить довжину масиву (кілкість елементів у масиві)

console.log(cars[cars.length - 1]); // отримаємо останній елемент масиву в незалежності від того, скільки в масиві елементів (індекс останнього елементу рахується по формулі "довжина - 1")


for (let i = 0; i < cars.length; i += 1) {
    console.log(i, cars[i]);
  }


  /*
1. for(let i = 0; 0 < 4; i += 1){
    console.log(0, cars[0]) "BMW"
    }
2. for(let i = 1; 1 < 4; i += 1){
    console.log(1, cars[1]) "Mercedes"
    }
3. for(let i = 2; 2 < 4; i += 1){
    console.log(2, cars[2]) "Infinity"
    }
4. for(let i = 3; 3 < 4; i += 1){
    console.log(3, cars[3]) "Honda"
    }
! 5. for(let i = 4; 4 < 4; i += 1) - false
*/

cars.push("Smart", "Bugatti"); // додає один або декілька елементів у кінець масиву
console.log("push", cars);
cars.pop(); // видаляє останній елемент масиву
console.log("pop", cars);
cars.unshift("Lamborgini", "Corvette"); // додає один або декілька елементів на початок масиву
console.log("unshift", cars);
cars.shift(); // видаляє перший елемент масиву
console.log("shift", cars);

console.log(cars.indexOf("Infinity")); // повертає індекс елементу в масиві, якщо такого елементу в масиві не існує - повертає -1

console.log(cars.includes("Infinity")); // перевіряє чи є такий елемент в масиві, якщо є - повертає true, якщо немає - повертає false


let string = "Alex";
const strArr = string.split(""); // розбиває строку на масив символів

console.log(strArr);

let sentence = "I love JavaScript !";
const wordsArr = sentence.split(" ");
wordsArr.pop();
console.log(wordsArr);

let newSentence = wordsArr.join(" "); // збирає масив в строку
console.log(newSentence);

const fruits = ["Banana", "Apple", "Pineapple", "Watermelon"];

const fruitsCopy = fruits.slice(1, 3); // створює новий масив, що містить копію частини вихідного масиву (fruits) Приймає .slice(start, end): start - індекс, з якого ми почнемо копіювати, end - індекс до якого ми будемо копіювати не включно. Якщо не вказати end - то елементи будуть копіюватися до кінця масиву. Якщо нічого не вказати - повернеться повна копія масиву. Якщо вказати відʼємне значення - елементи почнуть копіюватись з кінця - fruits.slice(-2) -> ["Pineapple", "Watermelon"]

console.log(fruits);
console.log(fruitsCopy);


//! splice

const vegetables = ["Tomato", "Cucumber", "Potato", "Beetroot"];

//* видалення

const deletedVegetables = vegetables.splice(1, 2); // .splice(start, num) вирізає елементи з масиву і повертає новий масив, який містить видалені елементи. start - з якого індексу я хочу почати видалення. num - скільки елементів я хочу видалити

console.log("видалення vegetables", vegetables);
console.log("deletedVegetables", deletedVegetables);


//* додавання

vegetables.splice(1, 0, "Onion"); // .splice(start, 0, element1, element2...) вставляє один або декілька елементів в будь-яку позицію масиву. start - з якого індексу я хочу почати вставляти. element1, element2 - елементи, що я хочу додати

console.log("додавання vegetables", vegetables);

//* заміна

vegetables.splice(0, 1, "Cucumber"); // .splice(start, num, element1, element2...)

console.log("заміна vegetables", vegetables);


// є масив елементів, потрібно видалити конкретний елемент з масиву

const students = ["Alex", "Oleg", "Vika", "Nastya", "Petro", "Olya"];
const studentName = "Nastya";

console.log("Students: ", students);
console.log("Delete: ", studentName);

const index = students.indexOf(studentName);

if (index !== -1) {
  students.splice(index, 1);
  console.log("Students: ", students);
} else {
  console.log(`Student ${studentName} doesn't exist!`);
} 
