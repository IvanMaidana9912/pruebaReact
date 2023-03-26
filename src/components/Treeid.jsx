import React from "react";
import { Link } from "react-router-dom";

const Treeid = ({ identification }) => {

    return (

        <div className="card mb-3 pt-xl-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={identification.img} className="img-fluid rounded-start" alt={identification.titulo} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{identification.titulo}</h5>
                        <p className="card-text">{identification.slogan}</p>
                        <ul>
                            {identification.detalle && identification.detalle.map(item => 
                                <li key="{item}">{item}</li>
                            )}
                        </ul>
                        <Link className="card-text" src={identification.catalogo}>Descargar Catálogo</Link>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default Treeid;