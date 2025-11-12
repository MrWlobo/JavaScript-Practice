let button = document.getElementById("button");
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let flag = 0;

button.addEventListener("click", imageSwap);

function imageSwap() {
    let elem = document.querySelector("img");
    flag++;

    elem.setAttribute("src", images[flag % images.length]);
    elem.className = "image" + ((flag % images.length) + 1);
}