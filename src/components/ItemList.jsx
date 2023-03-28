import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    
    const primeraLetraMayuscula = `${items[0].category[0].toUpperCase()}${items[0].category.slice(1)}` 
    return (
        <div>
            <div>
                <p className="paraphStyle"><b>{primeraLetraMayuscula}</b></p>
            </div>
            <div className="row mx-auto">
                {
                    items.map(item =>
                        <div className="col my-3" key={item.id}>
                            <Item item={item} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ItemList;