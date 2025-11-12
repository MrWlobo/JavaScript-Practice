const testBtn = document.getElementById("myButton");
const addBtn = document.getElementById("myButton1");
const removeBtn = document.getElementById("myButton2");
const result = document.getElementById("wynik");
let counter = 0;
let handlerAdded = false;

function increment() {
    counter++;
    result.textContent = counter;
}

addBtn.addEventListener("click", () => {
    if (!handlerAdded) {
        testBtn.addEventListener("click", increment);
        handlerAdded = true;
    }
});

removeBtn.addEventListener("click", () => {
    if (handlerAdded) {
        testBtn.removeEventListener("click", increment);
        handlerAdded = false;
    }
});