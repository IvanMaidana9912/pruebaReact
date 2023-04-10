import fotoConstruccion from "../../../../BBDD/dataLogos.json"

export const Trabajos = ({data}) => {
    const primeraLetraMayuscula = `${data[0].category[0].toUpperCase()}${data[0].category.slice(1)}`;

    return (
        <div> 
            {/* className="div-construccion" */}
            <h1 className="text-center">{primeraLetraMayuscula} realizados por BAVRV</h1>
            <img src={fotoConstruccion[0].construccion} alt="construccion" width={"1000px"}></img>
        </div>
    )
}