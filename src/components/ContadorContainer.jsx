
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
import Contador from "./Contador"



function ContadorContainer() {

    //Estados
    const [contador, setContador] = useState(0)

    //Acciones
    const handleClick = () => {
        setContador(contador + 1)
    }

    //Vista
    return (
        <Contador 
            contador={contador}
            handleClick={handleClick}
        />
    )
}

export default ContadorContainer