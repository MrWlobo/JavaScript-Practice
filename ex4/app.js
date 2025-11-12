let lista = document.getElementById("lista");
let btnAdd = document.getElementById("btnAdd");
let btnRemove = document.getElementById("btnRemove");
let btnRemoveNum = document.getElementById("btnRemoveNum");
let inputNum = document.getElementById("inputNum");

btnAdd.addEventListener("click", () => {
    const li = document.createElement("li");
    const newIndex = lista.children.length + 1;
    li.textContent = "Element " + newIndex;

    lista.appendChild(li);
});

btnRemove.addEventListener("click", () => {
    if (lista.firstElementChild) {
        lista.removeChild(lista.firstElementChild);
    } else {
        alert("Lista jest pusta!");
    }
});

btnRemoveNum.addEventListener("click", () => {
    num = inputNum.value;
    for (i = lista.children.length - 1; i >= 0 ; i--) {
        if (lista.children[i].textContent.split(" ")[1] == num) {
            lista.removeChild(lista.children[i])
        }
    }
});
