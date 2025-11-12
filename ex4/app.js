let lista = document.getElementById("lista");
let btnAdd = document.getElementById("btnAdd");
let btnRemove = document.getElementById("btnRemove");

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
