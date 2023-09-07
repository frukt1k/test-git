// const text = document.getElementById("text");

// console.dir(text);

// text.textContent = "Хей! Цей текст було змінено за допомогою JS!!!";

// const btnContainer = document.getElementById("btnContainer");
// const color = "red"
// const button = `<button class='button' style="background-color: ${color}">Це кнопка</button>`;



// btnContainer.insertAdjacentHTML("beforeend", button);




// Task: у вас є масив з технологій, потрібно через js ствоити список (ul li) і додати технології на сторінку
// спосіб 1
// const technologies = ["HTML", "CSS", "JS", "GIT", "React.js"];
// let tech = '';

// for (let i = 0; i < technologies.length; i += 1) {
//     tech += '<li>' + technologies[i] + '</li>';
// }



// const techList = document.getElementById('techlist');
// techList.insertAdjacentHTML("beforeend",`<ul>${tech}</ul>`)



// // 2 спосіб

// const container = document.getElementById("container");
// const ulEl = document.createElement("ul");

// for (let i = 0; i < technologies.length; i += 1) {
//   const liEl = document.createElement("li");
//   liEl.textContent = technologies[i];
//   ulEl.appendChild(liEl);
// }

// container.appendChild(ulEl);




//Task: Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//     {
//       label: "red",
//       color: "#FF0000",
//     },
//     {
//       label: "green",
//       color: "#00FF00",
//     },
//     {
//       label: "blue",
//       color: "#0000FF",
//     },
//     {
//       label: "yellow",
//       color: "#FFFF00",
//     },
//   ];

// const btnContainer = document.createElement("div");


// for (const button of colors) {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = button.label;
//   buttonEl.style.backgroundColor = button.color;
//   btnContainer.appendChild(buttonEl);
  
// }



// document.body.appendChild(btnContainer);