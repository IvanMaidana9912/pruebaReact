import React from "react";
import { Link } from "react-router-dom";
import Images from "./image";
const Item = ( {item} ) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border border-0 card-body text-center" id="itemContainer">
                <Images itemImg={item}/>
                <div >
                    <p className="card-text">{item.titulo}</p>
                    <p className="card-text">{item.slogan}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;