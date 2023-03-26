import React from "react";
import { Link } from "react-router-dom";
import Images from "./Image";
import Treeid from "./Treeid";
import ResidencialJson from "./json/residencial.json"


const ItemDetail = ({ items }) => {
    return (
        <div className="card mb-3 pt-xl-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={items.img[0]} className="img-fluid rounded-start" alt={items.titulo} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{items.titulo}</h5>
                        <p className="card-text">{items.slogan}</p>
                        <ul>
                            {items.detalle && items.detalle.map(item => {
                                <li key={item}>{item}</li>
                            })}
                        </ul>
                        <Link className="card-text" src={items.catalogo}>Descargar Catálogo</Link>
                    </div>
                </div>
            </div>
            <Images itemImg={items} />
            <div>
                {
                    ResidencialJson.map(cositas =>
                        cositas.subId === items.id ? <Treeid identification={cositas} /> : ""
                    )
                }
            </div>
        </div>
    )
};
export default ItemDetail;