function Button(props) {

    /* const esDiaPar = new Date().getDate() % 2 === 0; */

    return (
        <button className="btn">
            {/* {esDiaPar ? "Es dia par" : "Es dia impar"} */}
            {props.nombre}
        </button>
    )
}

export default Button