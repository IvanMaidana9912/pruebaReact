import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import dataItemsJSON from "./json/dataItems.json";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? dataItemsJSON.filter(item => item.category === id) : dataItemsJSON);
            }, 1000);
        });
        promesa.then((data) => {
            setItems(data);
            setLoading(false);
        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading/> : <ItemList items={items} />}
        </div>
    )
};

export default ItemListContainer