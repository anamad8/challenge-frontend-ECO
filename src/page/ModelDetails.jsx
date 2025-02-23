import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModelDetails } from '../services/api';
import '../styles/modelDetails.css';
import 'swiper/swiper-bundle.css';
import { Carousel } from '../components/Carousel';

export const ModelDetails = () => {
    const { id } = useParams();
    const [model, setModel] = useState(null);

    useEffect(() => {
        const fetchModelDetails = async () => {
            const data = await getModelDetails(id);
            setModel(data);
        };

        fetchModelDetails();
    }, [id]);

    if (!model) {
        return <div>Cargando...</div>;
    }

    // Triplique los elementos del array model_features (para que se vea el carousel mejor )
    const triplicatedFeatures = model.model_features.concat(
        model.model_features,
        model.model_features
        
    );

    return (
        <div className="model-details">
            <div className="model--details-title">
                <img src={model.photo} alt={model.name} className="model-image" />
                <div className='model-details-title-text'>
                    <h1 className="model-name">{model.name}</h1>
                    <h2 className="model-title">Preparada para<br/>cualquier desafío</h2>
                    <p className="model-description">
                        Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
                    </p>
                </div>
            </div>

            <div className='model--details-carousel'>
                <Carousel features={triplicatedFeatures} />
            </div>

            <div className="model-highlights">
                {model.model_highlights.map((highlight, index) => (
                    <div key={index} className={`highlight-section ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>

                        <div className="highlight-content">
                            {index % 2 === 0 ? (
                                <>
                                    <img src={highlight.image} alt={highlight.title} className="highlight-image" />
                                    <div className="highlight-content-text"> 
                                        <h2 className="highlight-title">{highlight.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: highlight.content }} className="highlight-text" />
                                    </div>

                                </>
                            ) : (
                                <div className='highlight-content-info'>
                                    <div className="highlight-content-text">
                                        <h2 className="highlight-title">{highlight.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: highlight.content }} className="highlight-text" />
                                    </div>
                                    <img src={highlight.image} alt={highlight.title} className="highlight-image" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};