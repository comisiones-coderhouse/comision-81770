import Button from "./Button"

function Main() {

    const nombre = "Horacio";
    const edad = 30;
    const isAdmin = true;
    const frutas = ["manzana", "banana", "cereza"];

    return (
        <>
            <h2>Bienvenido a mi aplicacion</h2>
            <Button nombre={nombre} edad={edad} isAdmin={isAdmin} frutas={frutas} />
        </>
    )
}

export default Main