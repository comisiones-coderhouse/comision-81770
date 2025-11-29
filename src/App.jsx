import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

//Componentes de React : 
//1) Siemper son funciones
//2) Siempre arrancan con mayuscula
//3) Siempre tienen retorno
//4) El retorno de un componente es JSX
//5) El retorno de un componente tiene que ser un unico elemento


function App() {
  return (
    <>
      <Header />

      {/* <Main /> */}

      <main className="main">

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<h2>Productos</h2>} />
          <Route path="/categorias" element={<h2>Categorias</h2>} />
          <Route path="/:texto" element={<h2>Soy ruta dinamica</h2>} />

        </Routes>

      </main>

      <Footer />
    </>
  )
}

export default App