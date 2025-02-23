import axios from 'axios';

const API_URL = 'https://challenge.egodesign.dev/api/models/';


// Función para ordenar los modelos localmente
const sortModels = (models, ordering) => {
    switch (ordering) {
        case "price":
            return models.sort((a, b) => a.price - b.price); // Menor a mayor precio
        case "-price":
            return models.sort((a, b) => b.price - a.price); // Mayor a menor precio
        case "-year":
            return models.sort((a, b) => b.year - a.year); // Más nuevos primero
        case "year":
            return models.sort((a, b) => a.year - b.year); // Más viejos primero
        default:
            return models; // Sin ordenamiento
    }
};

// Llama a los modelos según el segmento y el orden
export const getModels = async (segments = [], ordering = null) => {
    try {
        let requests = [];

        
        if (segments.length === 0) {
            requests.push(axios.get(`${API_URL}?ordering=${ordering || ''}`));
        } else {
            
            requests = segments.map(segment => axios.get(`${API_URL}?segment=${segment}`));
        }

        const responses = await Promise.all(requests);

        let combinedData = responses.flatMap(response => response.data);

        if (ordering) {
            combinedData = sortModels(combinedData, ordering);
        }

        return combinedData;
    } catch (error) {
        console.error('Error al obtener los modelos:', error);
        return [];
    }
};

// Detalles del vehículo
export const getModelDetails = async (id) => {
    try {
        const response = await axios.get(`https://challenge.egodesign.dev/api/models/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el detalle del vehículo:', error);
    }
};