import { Link, NavLink, Routes, Route } from "react-router-dom"


function Header() {

    return (
        <header className="header">
            <h1 className="header__title">Mi Aplicacion</h1>

            <Routes>
                <Route path="/productos" element={<input type="text" placeholder="Ej.: Protector solar"/>} />
            </Routes>

            <nav className="header__nav nav">

                {/* <a href="/">home 1</a> */}
                <NavLink to="/" className="nav__link">home</NavLink>

                {/* <a href="/productos">productos 1</a> */}
                <NavLink to="/productos" className="nav__link">productos</NavLink>

                {/* <a href="/cat-1">cat 1</a> */}
                <NavLink to="/categorias" className="nav__link">categorias</NavLink>

            </nav>
        </header>
    )
}

export default Header