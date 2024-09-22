import './Styles/MenuBar.css';

const MenuBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand"></div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MenuBar;