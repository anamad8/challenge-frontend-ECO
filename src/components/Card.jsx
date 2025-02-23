import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

export const Card = ({ id, name, photo, year, price, onVerModeloClick }) => {
    return (
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-info">{year} | ${price.toLocaleString('es-AR')}</p>
            <img src={photo} alt={name} className="card-image" />
            
            <div className="card-hover">
                <Link to={`/models/${id}`} 
                    className="card-button"
                    onClick={onVerModeloClick}
                >
                    Ver Modelo
                </Link>
            </div>
        </div>
    );
};