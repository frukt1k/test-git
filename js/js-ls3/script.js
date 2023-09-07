// let number = Number(prompt("Введіть будь-яке число"));

// if (number > 0) {
//   alert("Число " + number + " більше за 0!");
// } else if (number === 0) {
//   alert("Ви ввели 0");
// } else {
//   alert("Число " + number + " менше за 0!");
// }

// let username = prompt("Введіть ім'я");
// let password = prompt("Введіть пароль");

// if (password === "admin") {
//   alert("привіт " + username);
// } else {
//   alert("не вірний пароль");
// }

let num1 = Number(prompt("ведіть перше число"))
let num2 = Number(prompt("ведіть друге число"))
let sign = (prompt("ведіть математичну операцію (-,+,*,/)"))

switch  (sign) {
    case "+":
        alert(`${num1} + ${num2} = ${num1 + num2} `)
        break
    case "-":
        alert(`${num1} - ${num2} = ${num1 - num2} `)
        break
    case "*":
        alert(`${num1} * ${num2} = ${num1 * num2} `)
        break
    case "/":
        alert(`${num1} / ${num2} = ${num1 / num2} `)
        break
    default :
        alert("error")
}
