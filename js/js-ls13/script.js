// function circles(event){
//     event.preventDefault();
//     console.log("it works")
// }

// // document.getElementById("hello").onclick = show;
// document.getElementById("form").addEventListener("submit", show);

// function hello2(something){
//     console.log("hello " + something)
// }

// hello2("world")
// hello2("people")
// hello2("mom")
// hello2("brother")
// hello2("Ukraine")

// function hello(something){
//     console.log("hello " + something)
// }

// hello("world")
// hello("people")
// hello("mom")
// hello("brother")
// hello("Ukraine")

// function parallax(event){
//     console.log(event)

//     document.getElementById("circle").style.transform = "translate("+event.clientX+"px, "+event.clientY+"px)";
// }

// document.addEventListener("mousemove", parallax);
function circles(event) {
  event.preventDefault();

  let data = new FormData(document.getElementById("form"));

  let circles_html = "";
  let diametr = data.get("radius") * 2;

  for (let i = 0; i < data.get("amount"); i++) {
    circles_html +=
      '<div class="circle" style="height: ' +
      diametr +
      "px; width: " +
      diametr +
      'px;"></div>';
  }

  document.getElementById("all_circles").innerHTML = circles_html;
}

document.getElementById("form").addEventListener("submit", circles);
