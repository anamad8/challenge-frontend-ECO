import React from 'react';
import '../styles/hamburgerMenu.css';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

export const HamburgerMenu = ({ menuOpen, setMenuOpen, setActiveNav }) => {
    return (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <div className='menu-cerrar'>
                <span>Cerrar</span>
                <button onClick={() => setMenuOpen(false)}><GrClose /></button>
            </div>
            
            <div className="menu-section menu-linea menu-padding">
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Modelos</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Servicios y Accesorios</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Financiación</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Reviews y Comunidad</Link>
            </div>

            <div className="menu-section menu-linea menu-padding">
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Toyota Mobility Service</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Toyota Gazoo Racing</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Toyota Híbridos</Link>
            </div>

            <div className="menu-section menu-padding">
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Concesionarios</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Test Drive</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Contacto</Link>
            </div>

            <div className="actividades-section menu-padding">
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Actividades</Link>
                <Link to="" className="menu-link" onClick={() => setActiveNav("Modelos")}>Servicios al Cliente</Link>
                <Link to="" className="menu-link"onClick={() => setActiveNav("Modelos")}>Ventas Especiales</Link>
                <Link to="" className="menu-link"onClick={() => setActiveNav("Modelos")}>Innovación</Link>
                <Link to="" className="menu-link"onClick={() => setActiveNav("Modelos")}>Prensa</Link>
                <Link to="" className="menu-link"onClick={() => setActiveNav("Modelos")}>Acerca de...</Link>
            </div>
        </div>
    );
};