import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsJSON from "../../../../BBDD/dataItems.json";
// import servicesJSON from "../../../../BBDD/dataServices.json";
import { Loading } from "../../../Loading";
import { Derivations } from "./ItemListDerivations";


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    // const info = itemsJSON.filter(item => item.category === id) ? itemsJSON.filter(item => item.category === id) : "";
    // const info2 = servicesJSON.filter(item => item.category === id) ? servicesJSON.filter(item => item.category === id) : "";
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? itemsJSON.filter(item => item.category === id) : itemsJSON);
            }, 1000);
        });
        promesa.then((data) => {
            setItems(data);
            setLoading(false);
        })
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <Derivations categoria={items} />}
        </div>
    )
};