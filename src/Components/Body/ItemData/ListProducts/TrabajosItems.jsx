// import fotoConstruccion from "../../../../BBDD/dataLogos.json"
import json from "../../../../BBDD/dataimgtrabajos.json"
import { Carrousel } from "../../Carrousel/Carrousel";

export const Trabajos = ({ data }) => {
    const primeraLetraMayuscula = `${data[0].category[0].toUpperCase()}${data[0].category.slice(1)}`;
    const images = json[0].imagenes;

    return (
        <div>
            <div>
                <Carrousel />
            </div>
            <div>
                <h1 className="text-center">{primeraLetraMayuscula} realizados por BAVRV</h1>
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-center flex-jobs">
                {
                    images ? images.map(image => <img alt={image} className="m-2" src={image} key={image}></img>) : ""
                }
            </div>
            <div>
                <video className="job-video d-flex m-auto" src={json[1].videos[0]} preload="auto" controls></video>
            </div>
        </div>
    )
}