// const text = document.getElementById("text");

// console.log(text);

// text.textContent = "Цей текст було написано через JS";
// // text.style.color = "green";

// text.classList.remove("text1")
// text.classList.add("main-text")
// console.log(text.classList)


// const btn = document.getElementById("btn");
// const textContainer = document.getElementById("textContainer");

// btn.addEventListener("click", onClick);

// function onClick() {
//   const pEl = document.createElement("p");
//   pEl.textContent = "Ви натиснули!";
//   textContainer.appendChild(pEl);
// }
let number = Number(prompt("Який буде крок цифр?"))
if (isNaN(number) || number === 0){
    alert("Ви ввели не число або 0 тому крок буде 1")
    number = 1
}
let results = 0 
const dec = document.getElementById("decrement");
dec.addEventListener("click" ,decr)
const result = document.getElementById("result");
const inc = document.getElementById("increment");
increment.addEventListener("click" ,incr)
function decr(){
  results -= number
  result.textContent = results
}
function incr(){
  results += number
  result.textContent = results
}

