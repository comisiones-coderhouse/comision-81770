import { NavLink, Routes, Route } from "react-router-dom"
import CartWidget from "./CartWidget"

function Header() {

    return (
        <header className="header">
            <h1 className="header__title">Mi Aplicacion</h1>
            <Routes>
                <Route path="/productos" element={<input type="text" placeholder="Ej.: Protector solar" />} />
            </Routes>
            <nav className="header__nav nav">
                <NavLink to="/" className="nav__link">home</NavLink>
                <NavLink to="/productos" className="nav__link">productos</NavLink>
                <NavLink to="/categorias" className="nav__link">categorias</NavLink>
            </nav>
            <CartWidget />
        </header>
    )
}

export default Header