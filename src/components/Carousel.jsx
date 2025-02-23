import React from 'react';
import '../styles/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const Carousel = ({ features }) => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                loop={true}
                centeredSlides={false}
                breakpoints={{
                    1200: { slidesPerView: 4 }, 
                    900: { slidesPerView: 3 },
                    600: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index} className="custom-slide">
                        <div className="feature-slide">
                            <img src={feature.image} alt={feature.name} className="feature-image" />
                            <h3 className="feature-name">{feature.name}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
