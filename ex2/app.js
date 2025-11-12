// write code to show or hide ( depends on current state) context message block when you click button
let button = document.querySelector("#button");
let msg = document.querySelector("#message");

button.addEventListener("click", () => {
    msg.classList.toggle("hide")
});