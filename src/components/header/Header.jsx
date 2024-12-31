import { useState } from "react";
import './header.scss';

const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <h1 className="header__logo">KDO</h1>
            <div className="header__burger" onClick={toggleMenu}>
                <i className={`fa-solid fa-bars burger-icon ${menuOpen ? "hidden" : ""}`}></i>
            </div>
            <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
                <i className="fa-solid fa-xmark close-icon" onClick={toggleMenu}></i>
                <ul className="header__nav__list">
                <li><a href="#">Accueil</a></li>
                <li><a href="login.html" className="login">À propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;