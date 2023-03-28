import React from "react";
import Images from "./Image";
import Treeid from "./Treeid";
import ResidencialJson from "./json/residencial.json"


const ItemDetail = ({ items }) => {

    return (
        <div className="card mb-3 pt-xl-5 w-100">
            <div className="row g-0 d-flex flex-column align-content-center">
                <div className="col-md-8 d-flex text-center justify-content-center align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{items.titulo}</h5>
                        <div className="d-flex text-center justify-content-center">
                            <p className="card-text w-100 text-start">{items.slogan}</p>
                        </div>
                        <ul>
                            {items.detalle && items.detalle.map(item => {
                                <li key={item}>{item}</li>
                            })}
                        </ul>
                        <div className="d-flex justify-content-center">
                            {
                                items.catalogo ? <button onClick={() => {window.open(items.catalogo, '_blank')}} className="btn btn-info mt-5">Descargar Catálogo</button> : ""
                            }
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 d-flex w-50 flex-column">
                        <img src={items.img[0]} className="img-fluid rounded-start mb-3" alt={items.titulo} />
                        <Images itemImg={items} />
                    </div>
                </div>
            </div>
            <div>
                {
                    ResidencialJson.map(subId =>
                        subId.subId === items.id ? <Treeid identification={subId} /> : ""
                    )
                }
            </div>
        </div>
    )
};
export default ItemDetail;
