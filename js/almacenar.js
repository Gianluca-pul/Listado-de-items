const btnAgregar= document.getElementById("agregar");
const btnEliminar = document.getElementById("limpiar");


const contenedor = document.getElementById("contenedor");
const inputValue = document.getElementById("item");

let lista = [];
const KEY = "arrayItems"






document.addEventListener("DOMContentLoaded",()=>{

    mostrarElementos()

    btnAgregar.addEventListener("click",()=>{
        
        const newValue = inputValue.value;
        lista.push(newValue)
        localStorage.setItem(KEY,JSON.stringify(lista));
        
        contenedor.appendChild(crearLi(newValue));

    })

    btnEliminar.addEventListener("click",()=>{



    })


})


function mostrarElementos(){

    let arrayValues = JSON.parse(localStorage.getItem(KEY)) || [];
    contenedor.replaceChildren();
    
        arrayValues.forEach((element)=>{

            contenedor.appendChild(crearLi(element));

        })
}


function crearLi(elemento){

    const li = document.createElement("li");
    li.textContent = elemento; 
    return li;
}
