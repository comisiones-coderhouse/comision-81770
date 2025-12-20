import { app } from "../../firebaseConfig";
import { getFirestore, collection, addDoc, /* getDoc,  getDocs , updateDoc, deleteDoc */ } from "firebase/firestore";




function CarritoPage() {


    function handleComprar(e) {
        e.preventDefault();


        //1) necesito una referencia a la plataforma de firebase
        //const app = initializeApp(firebaseConfig);

        //2) necesito una referencia a la base de datos
        const db = getFirestore(app);

        //3) necesito una referencia a la coleccion con la cual voy a interactuar
        const productCollection = collection(db, "productos");

        //4) hago la consulta (CRUD/ABM = Create, Read, Update, Delete)
        const consulta = addDoc(productCollection, {
            nombre: "Producto de prueba 2",
            precio: 19999
        })

        consulta
            .then((resultado) => {
                console.log("Documento creado con ID:", resultado)
            })
            .catch((error) => {
                console.log("Error al crear el documento:", error)
            })

    }


    return (
        <section>
            <h2>Carrito de compras</h2>
            {/* Por aca iria el desglose del carrito */}

            <form>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ej: Pablo" inputMode="text" />
                </div>
                <div>
                    <label htmlFor="tel">Telefono</label>
                    <input type="text" id="tel" placeholder="Ej: 555-555" inputMode="tel" />
                </div>
                <button onClick={handleComprar}>comprar</button>
            </form>

        </section>
    )
}
export default CarritoPage