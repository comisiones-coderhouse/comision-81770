/* import { productos } from "../../productos" */

import { useEffect, useState } from "react";
import { useContext } from "react"
import { miContexto } from "../../CartProvider";

function ProductosPage() {

    //let productos = []
    const [productos, setProductos] = useState([])
    const elValorDelContexto = useContext(miContexto)

    //useEffect(funcion,array de dependencias)
    useEffect(()=>{

        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(respuesta => {
            //console.log(respuesta) {products:[],limit:0,total:100,skip:0}
            //console.log(respuesta.products)

            //productos = respuesta.products
            setProductos(respuesta.products)

            console.log("🚀 ~ ProductosPage ~ productos:", respuesta)
        })
        .catch(error => console.log('error', error));

    },[])

    
    function handleAddToCart(){
        console.log("Agregar a carrito")
        elValorDelContexto.setTotal(10)
    }


    return (
        <div className="card-container">
            {productos.map((producto) => {
                return (
                    <article key={producto.id} className="card">
                        <h3>{producto.title}</h3>
                        <button onClick={handleAddToCart}>agregar al carrito</button>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductosPage