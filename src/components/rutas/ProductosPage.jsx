/* import { productos } from "../../productos" */

import { useEffect, useState } from "react";
import { useContext } from "react"
import { miContexto } from "../../CartProvider";
import { app } from "../../firebaseConfig";
import { collection, getDocs, getFirestore /* query, where */ } from "firebase/firestore";

function ProductosPage() {

    //let productos = []
    const [productos, setProductos] = useState([])
    const elValorDelContexto = useContext(miContexto)

    //useEffect(funcion,array de dependencias)
    useEffect(() => {

        //1) necesito una referencia a la plataforma de firebase
        //const app = initializeApp(firebaseConfig);

        //2) necesito una referencia a la base de datos
        const db = getFirestore(app);

        //3) necesito una referencia a la coleccion con la cual voy a interactuar
        const productCollection = collection(db, "productos");

        //3.5) Creo un filtro para la consulta (opcional)
        //const filtro = query(productCollection, where("precio", ">", 5000))
        //const filtro = query(productCollection, where("categoria", "==", "electrodomesticos"))
        //const filtro = query(productCollection, where("id", "==", 2))

        //4) hago la consulta (CRUD/ABM = Create, Read, Update, Delete)
        //SELECT * FROM productos
        //const consulta = getDocs(filtro);
        const consulta = getDocs(productCollection);


        consulta
            .then((resultado) => {

                const resultadoConFormato = resultado.docs.map((doc)=>{
                    return doc.data()
                })

                console.log("Documentos traidos:", resultadoConFormato)
                setProductos(resultadoConFormato)

            })
            .catch((error) => {
                console.log("Error al traer los documentos:", error)
            })


    }, [])


    function handleAddToCart() {
        console.log("Agregar a carrito")
        elValorDelContexto.setTotal(10)
    }


    return (
        <div className="card-container">
            {productos.map((producto) => {
                return (
                    <article key={producto.id} className="card">
                        <img src={producto.image} alt={producto.nombre} />
                        <h3>{producto.nombre} {producto.precio}</h3>
                        <button onClick={handleAddToCart}>agregar al carrito</button>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductosPage