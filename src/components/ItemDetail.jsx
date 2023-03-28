import React from "react";
import { Link } from "react-router-dom";
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
                            <p className="card-text w-75 text-start">{items.slogan}</p>
                        </div>
                        <ul>
                            {items.detalle && items.detalle.map(item => {
                                <li key={item}>{item}</li>
                            })}
                        </ul>
                        <div className="d-flex justify-content-center">
                            <Link className="card-text" src={items.catalogo} target={"_blank"}>
                                Descargar Catalogo
                            </Link>
                        </div>
                        {/* {
                                items.catalogo ? <Link id="catalogoLinkprimary" className="card-text" src={items.catalogo}><b>Descargar Catálogo</b></Link> : ""
                            } */}
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