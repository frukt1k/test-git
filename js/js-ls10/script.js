const words = [
  "дерево",
  "стіл",
  "підлога",
  "дім",
  "велосипед",
  "літак",
  "машина",
  "яблуко",
];
const word = words[Math.floor(Math.random() * words.length)];

const answerArr = [];
for (let i = 0; i < word.length; i += 1) {
  answerArr.push("_");
}

console.log(answerArr.join(" "));

while (answerArr.join("") !== word) {
  alert(answerArr.join(" "));
  const letter = prompt(
    "Вгадайте букву, або натисніть cancel для завершення гри"
  );
  if (letter === "" || letter === null) {
    break;
  } else if (letter.length !== 1){
    alert("Будь ласка, треба 1 буква");
}  else {
    for (let i = 0; i < word.length; i += 1){
        console.log(word[i])
        if(word[i] === letter ){
            answerArr[i] = letter;
        }
    }
  }
}

if (answerArr.join("") === word){
alert("Ви відгадали! Було загадано слово " + word);}