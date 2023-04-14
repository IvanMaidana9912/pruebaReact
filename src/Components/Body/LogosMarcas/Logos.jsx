import MarcasJSON from "../../../BBDD/dataLogosMarcas.json"
const [Marcas] = MarcasJSON

export const LogosMarcas = () => {
    return (
        <div className="col d-flex flex-row flex-wrap justify-content-center">
            {
               Marcas.marcasImg ? Marcas.marcasImg.map(marca => <img className="m-2" width={"100px"} height={"30px"} src={marca} alt={marca} key={marca}></img>) : "" 
            }
        </div>
    )
};