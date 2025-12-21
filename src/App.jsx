import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import ProductosPage from "./components/rutas/ProductosPage"
import CategoriasPage from "./components/rutas/CategoriasPage"
import DinamicoPage from "./components/rutas/DinamicoPage"
import CarritoPage from "./components/rutas/CarritoPage"

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/:id" element={<DinamicoPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </main>

      <Footer />
      
    </>
  )
}

export default App