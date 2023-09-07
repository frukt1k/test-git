// const car1 = "BMW";
// const car2 = "Audi";
// const car3 = "Infinity";

// const cars = ["BMW", "Audi", "Infinity"];

// const [, audi] = cars; // деструктуризація
// // const audi = cars[1]

// console.log(audi);
// console.log(audi);
// console.log(audi);
// console.log(audi);

//! =====

// const car = {
//   brand: "Infinity",
//   model: "Q60s",
//   volume: 3.0,
//   onSale: true,
// };

// const { brand, model: carModel } = car; // деструктуризація
// // const brand = car.brand
// // const carModel = car.model

// console.log(brand);
// console.log(carModel);

// console.log(car);

// function logCarMsg({ brand, model, volume }) {
//   console.log(`Car ${brand} ${model} has ${volume}l engine.`);
// }

// logCarMsg(car);
// logCarMsg({
//   model: "330i",
//   onSale: false,
//   volume: 2.0,
//   brand: "BMW",
// });

//! =====

// обʼєкт параметрів
// function sum({ a, b }) {
//   console.log(a + b);
// }

// sum({
//   a: 5,
//   b: 10,
// });
// sum({
//   a: 90,
//   b: 40,
// });
// sum({
//   a: 57,
//   b: 14,
// });

//! ========

// Оператор ...

// spread - розпилити, він розбиває(розпиляє) масив або обʼєкт на окремі значення

// rest - остача, він збирає всі окремі значення у масив

// console.log(Math.max(4, 5, 3, 2, 43, 5, 243, 434, 2));

// const arr = [34, 634, 67346, 35, 2352, 6, 7, 3, 6, 73, 5, 38, 43, 5];

// console.log(Math.max(...arr));

// const arrCopy = [...arr]; // так правильно робиться копія масиву

// // const arrCopy = arr //! так ніколи не копіюй масив!!!

// arr[0] = 1000
// arrCopy[1] = 993939393939

// console.log(arr)
// console.log(arrCopy)

// const car = {
//   brand: "Infinity",
//   model: "Q60s",
//   volume: 3.0,
//   onSale: true,
// };

// const carCopy = { ...car, volume: 3.5 };

// console.log(car);
// console.log(carCopy);

function sumOfAll(...numbers) {
    console.log(numbers);
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];
    }
    console.log(sum);
  }
  
  sumOfAll(2, 5);
  sumOfAll(5, 4, 3, 3, 4, 4, 6, 53);
  sumOfAll(5, 6, 346, 346);
  sumOfAll(5, 6, 6);
  