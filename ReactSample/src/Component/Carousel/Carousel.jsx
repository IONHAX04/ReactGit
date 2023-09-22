import React from "react";

import '../Carousel/Carousel.css';
import '../Carousel/CarouselGallery.jsx';

import { galleryCarousel } from './galleryCarousel';
import CarouselGallery from "../Carousel/CarouselGallery.jsx";

function Carousel() {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {galleryCarousel.map((images) => {
                            return <CarouselGallery details={images} key={images.id} />
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
            );
}

export default Carousel