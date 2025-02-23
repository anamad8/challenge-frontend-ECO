import React,{ useState }  from 'react';
import '../styles/navbar.css';
import Logo from '../assets/ego.png';
import { IoMenuOutline } from "react-icons/io5";
import { HamburgerMenu } from './HamburgerMenu';
import { Link } from 'react-router-dom';

export const Navbar = ({ activeNav, setActiveNav }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    console.log(activeNav)
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link 
                        to="/" 
                        onClick={() => setActiveNav("Modelos")}
                    >
                        <img src={Logo} alt="Logo" />
                    </Link>
                    
                </div>

                <div className="navbar-menu">
                    <Link 
                        to="/" 
                        className={activeNav === "Modelos" ? "active" : ""} 
                        onClick={() => setActiveNav("Modelos")}
                    >
                        Modelos
                    </Link>
                    <Link 
                        to="#" 
                        className={activeNav === "Modelos" ? "" : "active"} 
                    >
                        Ficha de modelo
                    </Link>
                </div>
            </div>

            <div className="navbar-right">
                <span className="navbar-user">Menú</span>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <IoMenuOutline />
                </button>
            </div>

            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  setActiveNav={setActiveNav}/>
        </nav>
    );
};