// import fotoConstruccion from "../../../../BBDD/dataLogos.json"
import json from "../../../../BBDD/dataimgtrabajos.json"

export const Trabajos = ({ data }) => {
    const primeraLetraMayuscula = `${data[0].category[0].toUpperCase()}${data[0].category.slice(1)}`;
    console.log(json[1].videos);
    const images = json[0].imagenes;

    return (
        <div>
            <h1 className="text-center">{primeraLetraMayuscula} realizados por BAVRV</h1>
            <div className="d-flex flex-wrap mt-4 justify-content-center">
                {
                    images ? images.map(image => <img alt={image} className="w-25 m-2" src={image} key={image}></img>) : ""
                }
            </div>
            <div>
                <video className="w-25 mt-5" src={json[1].videos[0]} preload="auto" controls></video>
            </div>
            {/* className="div-construccion" */}
            {/* <h1 className="text-center">{primeraLetraMayuscula} realizados por BAVRV</h1>
            <img src={fotoConstruccion[0].construccion} alt="construccion" width={"1000px"}></img> */}
        </div>
    )
}