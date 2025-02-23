import React, { useEffect, useState } from 'react';
import { getModels } from '../services/api';
import '../styles/home.css';
import { Card, Filter, Footer } from '../components';

export const Home = ({ setActiveNav }) => {
    const [models, setModels] = useState([]);
    const [activeFilter, setActiveFilter] = useState("Todos");
    const [activeOrder, setActiveOrder] = useState("Nada");

    const handleVerModeloClick = () => {
        setActiveNav("Ficha de Modelo");
    };

    const handleFilterChange = async (filter) => {
        setActiveFilter(filter);
        fetchModels(filter, activeOrder);
    };

    const handleOrderChange = async (order) => {
        setActiveOrder(order);
        fetchModels(activeFilter, order);
    };

    const fetchModels = async (filter, order) => {
        let segments = [];
        let ordering = null;

        // Define los segmentos según el filtro seleccionado
        switch (filter) {
            case "Autos":
                segments = [1, 2]; 
                break;
            case "Pickups y Comerciales":
                segments = [3]; 
                break;
            case "SUVs y Crossovers":
                segments = [4]; 
                break;
            default:
                segments = []; 
        }

        // Define el ordenamiento según el orden seleccionado
        switch (order) {
            case "De menor a mayor precio":
                ordering = "price"; 
                break;
            case "De mayor a menor precio":
                ordering = "-price"; 
                break;
            case "Más nuevos primero":
                ordering = "-year"; 
                break;
            case "Más viejos primero":
                ordering = "year"; 
                break;
            default:
                ordering = null; 
        }

        const data = await getModels(segments, ordering);
        setModels(data);
    };

    useEffect(() => {
        fetchModels(activeFilter, activeOrder); 
    }, []);

    return (
        <>
            <h1 className='home-title'>Descubrí todos los modelos</h1>

            <div className='home-container'>
                <Filter
                    onFilterChange={handleFilterChange}
                    onOrderChange={handleOrderChange}
                />
            </div>


            <div className='models-card-container'>
                <div className="models-container">
                    {models.map((model) => (
                        <Card
                            key={model.id}
                            id={model.id}
                            name={model.name}
                            photo={model.photo}
                            year={model.year}
                            price={model.price}
                            onVerModeloClick={handleVerModeloClick}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};