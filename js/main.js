// getElementById - busca el primer elemento que tenga el id indicado
let btnEjecutar = document.getElementById("btnEjecutar");

let elementosPorClase = document.getElementsByClassName("list-group-item");
console.log(elementosPorClase);
console.log(elementosPorClase.length);
let btn = document.getElementsByTagName("button");
console.log(btn);
let li = document.createElement("li"); //<li>
li.innerText="Anothe fourth item";//<li>Anothe fourth item</li>
li.className="list-group-item";

btnEjecutar.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(li);
    let ul = document.getElementsByTagName("ul");
    //console.log(ul[0]);
    //prepend primero de la lista
    ul[0].prepend(li.cloneNode(true));
    //append ultimo de la lista
    ul[1].append(li.cloneNode(true));
    // before antes del ul
    ul[2].before(li.cloneNode(true));
    // after despues del ul
    ul[3].after(li.cloneNode(true));


    ul[4].insertAdjacentHTML("beforebegin", "<li class='list-group-item'>Before Begin</li>");
    ul[4].insertAdjacentHTML("afterbegin", "<li class='list-group-item'>After Begin</li>");
    ul[4].insertAdjacentHTML("beforeend", "<li class='list-group-item'>Before End</li>");
    ul[4].insertAdjacentHTML("afterend", "<li class='list-group-item'>After End</li>");


});

/*let elemento = document.querySelector("ul > li");
    console.log(elemento);

    elemento = document.querySelector("ul > li:last-child");
    console.log(elemento);

    let elementos = document.querySelectorAll("ul > li:last-child");
    console.log(elementos);

    elementos = document.querySelectorAll("ul > li:nth-child(2)");
    console.log(elementos);
    let main = document.getElementsByTagName("main");
    for (const elemento of main){
        console.log(elemento);
    }*/