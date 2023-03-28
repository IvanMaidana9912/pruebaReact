import React from "react";

const Treeid = ({ identification }) => {

    return (
        <div className="card mb-3 p-xl-5 bg-dark" id="cardsSecundaries">
            <div className="row g-0">
                <div className="col-md-4">
                    {
                        identification.img ? <img src={identification.img[0]} className="img-fluid rounded-start" alt={identification.titulo} /> : ""
                    }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        {
                            identification.titulo ? <h5 className="card-title">{identification.titulo}</h5> : ""
                        }
                        {
                            identification.slogan ? <p className="card-text">{identification.slogan}</p> : ""
                        }

                        <ul>
                            {identification.detalle && identification.detalle.map(item =>
                                <li key={item}>{item}</li>
                            )}
                        </ul>
                        <div className="d-flex justify-content-center">
                            {
                                identification.catalogo ? <button onClick={() => {window.open(identification.catalogo, '_blank')}} className="btn btn-info mt-5">Descargar Catálogo</button> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treeid;
