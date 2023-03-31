import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import dataItemsJSON from "../../../../BBDD/dataItems.json";
import { Loading } from "../../../Loading";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataItemsJSON.find(item => item.id === id));
            }, 1900)
        });
        promesa.then((data) => {
            setItem(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            <div className="container">
                {loading ? <Loading /> : <ItemDetail items={item} />}
            </div>
        </div>
    )
}