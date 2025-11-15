import { useState } from "react"

function Popup() {

    //Estados
    //const [miEstado,setMiEstado] = useState(valorInicial)
    const [isOpen, setIsOpen] = useState(false)

    //Acciones
    const handleAbrirPopup = () => {
        setIsOpen(true)
        /* const id =  */setTimeout(() => {
            handleCerrarPopup()
        }, 2000)


       /*  clearTimeout(id) */
    }

    const handleCerrarPopup = () => {
        setIsOpen(false)
    }

    //Vista
    if (isOpen == false) {
        return (
            <div>
                <button onClick={handleAbrirPopup}>Finalizar compra</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={handleAbrirPopup}>Finalizar compra</button>

                <div className="popup" onClick={handleCerrarPopup}>
                    <div className="popup__container">
                        <button onClick={handleCerrarPopup}>x</button>
                        <p>Felicitaciones! muchas gracias por elegirnos. Vuelva a comprar.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Popup