import React from "react";
import dataCarrousel from './json/dataCarrousel.json'

const Carrousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src={"https://i.imgur.com/BtueVOq.jpg"} key={"carrousel"} className="d-block w-100" alt={"carousel"}></img>
                </div>

                {
                    dataCarrousel[0].carrousel ? dataCarrousel[0].carrousel.map((carr, index) => <div key={index} className="carousel-item"><img src={carr} key={index} className="d-block w-100" alt={"carousel"}></img></div>) : ""
                }
            </div>
        </div>
    );
};

export default Carrousel;