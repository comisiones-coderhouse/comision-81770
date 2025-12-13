import { useContext } from "react"
import { miContexto } from "../CartProvider"



function CartWidget() {

    //Mandar a llamar al hook useContext en otras palabras le extrae el valor actual al contexto
    const elValorDelContexto = useContext(miContexto)
    //{elNumero: 1, losNumeros: Array(4), nombre: 'Horacio', carrito: Array(0), total: 0}

    return (
        <div>
            🛒
            <span>
                {elValorDelContexto.total}
            </span>
        </div>
    )
}
export default CartWidget