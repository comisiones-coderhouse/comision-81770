import Button from "./Button"
import Contador from "./Contador";
import Popup from "./Popup";

function Main() {

    const nombre = "Horacio";
    const edad = 30;
    const isAdmin = true;
    const frutas = ["manzana", "banana", "cereza"];

    return (
        <main>
            <h2>Bienvenido a mi aplicacion</h2>
            <Button nombre={nombre} edad={edad} isAdmin={isAdmin} frutas={frutas} />
            {/* <Button nombre="Carlos" edad={25} isAdmin={false} frutas={["manzana", "banana", "cereza"]} />
            <Button nombre="Florencia" edad={28} isAdmin={true} frutas={["manzana", "banana", "cereza"]} />
            <Button nombre="Juan" edad={32} isAdmin={false} frutas={["manzana", "banana", "cereza"]} /> */}
            <Contador />
            <Popup />
        </main>
    )
}

export default Main