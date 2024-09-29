import { useState } from 'react';
import './Styles/MenuBar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState); // Correct toggle logic
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'} {}
            </div>
            <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
