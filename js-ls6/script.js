const book = {
    title:"Harry Poter",
    author:"J.K Rowling",
    raiting: 9.8
}

console.log(book)
console.log(book.author)
console.log(book.title)
console.log(book.raiting)

console.log(
   `Book title: ${book.title}\nBook author: ${book.author}\nBook raiting: ${book.raiting}`
 );

book.raiting = 9.9


book.genre = "fiction"

console.log(book)


for (const key in book){
    console.log(`${key}: ${book[key]}`);
}

// // Object.keys(obj) - повертає масив, який складається з ключів обʼєкту obj

console.log(Object.keys(book)); // ['title', 'author', 'raiting', 'genre']

// // Object.values(obj) - повертає масив, який складається зі значень обʼєкту obj

console.log(Object.values(book)); // ['Harry Potter', 'J. K. Rowling', 9.9, 'fiction']


// const users = [
//   {
//     name: "Oleg",
//     birthDate: "18/04/2006",
//     status: "user",
//     id: 0,
//   },
//   {
//     name: "Julia",
//     birthDate: "24/09/2009",
//     status: "premium",
//     id: 1,
//   },
//   {
//     name: "Nazar",
//     birthDate: "11/01/2015",
//     status: "admin",
//     id: 2,
//   },
//   {
//     name: "Olya",
//     birthDate: "01/01/2001",
//     status: "user",
//     id: 3,
//   },
// ];


// for (let i = 0; i < users.length; i += 1) {
//     const userBirthYear = Number(users[i].birthDate.split("/")[2]);
//     console.log(
//       `Name: ${users[i].name}\nStatus: ${users[i].status}\nAge: ${
//         2023 - userBirthYear
//       }`
//     );
// }











//* Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

//? додає поле mood зі значенням 'happy'

//? замінює значення hobby на 'skydiving'

//? замінює значення premium на false

//? виводить вміст об'єкта user у форматі ключ:значення використовуючи for in

// Код

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

//!===================



//* Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 90,
    Oleg: 450,
  };


  const salariesArr = Object.values(salaries);
console.log(salariesArr);

let sum = 0;

for (let i = 0; i < salariesArr.length; i += 1) {
  //   console.log(salariesArr[i]);
  sum += salariesArr[i];
}

console.log(sum);
