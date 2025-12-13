import { useParams } from "react-router-dom"



function DinamicoPage() {
    
    //{id: '1'}
    const params = useParams()
    //const locationNativo = window.location
    //const pathnameNativo = locationNativo.pathname
    
    //console.log("🚀 ~ DinamicoPage ~ params:", params)
    //console.log("🚀 ~ DinamicoPage ~ locationNativo:", locationNativo)
    //console.log("🚀 ~ DinamicoPage ~ pathnameNativo:", pathnameNativo)


    return (
        <div>
            Pagina dinamica del producto : {params.id}
        </div>
    )
}
export default DinamicoPage