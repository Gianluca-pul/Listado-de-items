const btnAgregar= document.getElementById("agregar");
const btnEliminar = document.getElementById("limpiar");


const contenedor = document.getElementById("contenedor");
const inputValue = document.getElementById("item");

let lista = [];
const KEY = "arrayItems"

const resetArray = []

document.addEventListener("DOMContentLoaded",()=>{

    mostrarElementos()

    btnAgregar.addEventListener("click",()=>{
        
        let newValue = inputValue.value;
        lista.push(newValue)
        localStorage.setItem(KEY,JSON.stringify(lista));
        contenedor.appendChild(crearLi(newValue));
        inputValue.value = " "

    })


    btnEliminar.addEventListener("click",()=>{

        contenedor.replaceChildren();
        localStorage.removeItem(KEY)
        lista = [];
    })

function mostrarElementos(){


    lista = JSON.parse(localStorage.getItem(KEY)) || [];
    
    
        lista.forEach((element)=>{

            contenedor.appendChild(crearLi(element));

        })
}


function crearLi(elemento){

    const li = document.createElement("li");
    li.textContent = elemento; 
    return li;
}
})