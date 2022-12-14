// getElementById - busca el primer elemento que tenga el id indicado
let btnEjecutar = document.getElementById("btnEjecutar");

let elementosPorClase = document.getElementsByClassName("list-group-item");
console.log(elementosPorClase);
console.log(elementosPorClase.length);
let btn = document.getElementsByTagName("button");
console.log(btn);

btnEjecutar.addEventListener("click", function(event){
    event.preventDefault();

    

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