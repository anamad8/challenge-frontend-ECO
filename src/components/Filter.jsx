import React, { useEffect, useState } from 'react';
import '../styles/filter.css';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const Filter = ({ onFilterChange, onOrderChange }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [orderMenuOpen, setOrderMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Todos");
    const [activeOrder, setActiveOrder] = useState("Nada");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filters = ["Todos", "Autos", "Pickups y Comerciales", "SUVs y Crossovers"];
    const orderOptions = ["Nada", "De menor a mayor precio", "De mayor a menor precio", "Más nuevos primero", "Más viejos primero"];

    const formatOrderText = (text) => {
        return text.replace(/(menor|mayor|nuevos|viejos)/gi, "<strong>$1</strong>");
    };

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    const handleOrderClick = (order) => {
        setActiveOrder(order);
        onOrderChange(order);
    };

    return (
        <div className="filters-container">
            <div className="filter-options">
                <div className="filter-dropdown">
                    <span onClick={() => setFilterMenuOpen(!filterMenuOpen)}>
                        Filtrar por {isMobile ? (filterMenuOpen ? <SlArrowUp /> : <SlArrowDown />) : ""}
                    </span>
                    {isMobile && (
                        <div className={`filter-mobile-menu ${filterMenuOpen ? 'open' : ''}`}>
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    className={`orden-btn ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <>
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </>
                )}
            </div>

            <div className="order-options">
                <span onClick={() => setOrderMenuOpen(!orderMenuOpen)}>
                    Ordenar por {orderMenuOpen ? <SlArrowUp /> : <SlArrowDown />}
                </span>
                {orderMenuOpen && (
                    <div className={`filter-orden-menu ${orderMenuOpen ? 'open' : ''}`}>
                        {orderOptions.map((order) => (
                            <button
                                key={order}
                                className={`orden-btn ${activeOrder === order ? 'active' : ''}`}
                                onClick={() => handleOrderClick(order)}
                                dangerouslySetInnerHTML={{ __html: formatOrderText(order) }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};