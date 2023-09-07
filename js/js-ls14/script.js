document.getElementById("openModalBtn").addEventListener("click",openov);
function openov(){
    document.body.classList.add("open");
    window.addEventListener("keydown", close);

}

document.getElementById("closeBtn").addEventListener("click",closeov);
function closeov(){
    document.body.classList.remove("open");
    window.removeEventListener("keydown", close);
}

document.getElementById("overlay").addEventListener("click",closeov);



function close(event) {
  if (event.key === "Escape") {
  document.body.classList.remove("open")
  }
}















