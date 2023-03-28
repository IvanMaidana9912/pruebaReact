import React from "react";
import { Link } from "react-router-dom";

const Item = ( {items} ) => {

    return (
        <Link to={"/item/" + items.id} className="text-decoration-none text-dark">
            <div className="card border border-0 card-body text-center" id="itemContainer">
                <img src={items.img[0]} width={200} alt={items.titulo} />
                <div >
                    <p className="card-text" id="idCardTitle"><b>{items.titulo}</b></p>
                    <p className="card-text text-start" >{items.slogan}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;