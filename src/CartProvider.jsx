import { createContext, useState } from "react";

//El contexto 
export const miContexto = createContext()
//{ Provider : ... , otrasProps... }


//El Provider
//miContexto.Provider
const Provider = miContexto.Provider



//El envolvedor del Provider
function CartProvider(props) {

    //const total = 0
    const [total,setTotal] = useState(0)

    //Lo que este en esta constante es lo "global", seria lo que otros componentes van a poder "consumir"
    const elValorDelContexto = {
        elNumero : 1,
        losNumeros : [1,2,3,4],
        nombre : "Horacio",
        carrito : [],
        total : total,
        setTotal : setTotal
    }

    return (
        <Provider value={elValorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CartProvider