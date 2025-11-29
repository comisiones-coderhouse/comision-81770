function Contador(props) {

    return (
        <div>
            <p id="parrafo">Contador: {props.contador}</p>
            <button onClick={props.handleClick}>Incrementar</button>
        </div>
    )
}

export default Contador