// import fotoConstruccion from "../../../../BBDD/dataLogos.json"
import json from "../../../../BBDD/dataimgtrabajos.json"
import { Carrousel } from "../../Carrousel/Carrousel";

export const Trabajos = ({ data }) => {
    const primeraLetraMayuscula = `${data[0].category[0].toUpperCase()}${data[0].category.slice(1)}`;
    const images = json[0].imagenes;
    const videos = json[1].videos;

    return (
        <div>
            <div>
                <Carrousel />
            </div>
            <div>
                <h1 className="text-center">{primeraLetraMayuscula} realizados con nosotros</h1>
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-start flex-jobs">
                {
                    images ? images.map(image => <img alt={image} className="m-2 zoomTrabajo" src={image} key={image}></img>) : ""
                }
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-start flex-jobs">
                {
                    videos ? videos.map(vid =>  <video className="job-video d-flex m-auto mb-4" key={vid} src={vid} preload="auto" controls></video>)  : ""
                }
            </div>
        </div>
    )
};