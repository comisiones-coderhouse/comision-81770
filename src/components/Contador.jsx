
/* 

index.html

<div id="root">
    <p>Contador: 0</p>
    <button>Incrementar</button>
</div>



index.js

let contador = 0;
const miBoton = document.querySelector("button");
const miParrafo = document.querySelector("p");

miBoton.addEventListener("click", () => {
    miPaafo.innerText = contador++;
})


*/

import { useState } from "react"



function Contador() {

    //variable "comun"
    //let contador = 0;

    //variable "reactiva"
    //const [miEstado,setMiEstado] = useState(valorInicial)
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        //contador = contador + 1
        //console.log(contador)
        setContador(contador + 1)
    }

    //vista
    return (
        <div>
            <p id="parrafo">Contador: {contador}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    )
}

export default Contador