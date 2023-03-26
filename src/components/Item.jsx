import React from "react";
import { Link } from "react-router-dom";

const Item = ( {item} ) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border border-0 card-body text-center" id="itemContainer">
                {/* <Images itemImg={item}/> */}
                <img src={item.img[0]} width={200} alt={item.titulo} />
                <div >
                    <p className="card-text" id="idCardTitle"><b>{item.titulo}</b></p>
                    <p className="card-text" id="idCardSlogan">{item.slogan}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;