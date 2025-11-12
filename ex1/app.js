let button1 = document.querySelector("#mybutton");
let button2 = document.querySelector("#mybutton1");
let msg = document.querySelector("#myinput");
let output = document.querySelector("#myh1");

button1.addEventListener("click", () => {
    msg.classList.toggle("hide")
});

button2.addEventListener("click", () => {
    output.textContent = msg.value;
});
