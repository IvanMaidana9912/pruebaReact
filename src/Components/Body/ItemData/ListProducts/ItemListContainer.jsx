import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsJSON from "../../../../BBDD/dataItems.json";
import { Loading } from "../../../Loading";
import { Derivations } from "./ItemListDerivations";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        if (id === "services" || id === "comercial" || id === "residencial") {
            const promesa = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(id ? itemsJSON.filter(item => item.category === id) : itemsJSON)
                }, 1000);
            });
            promesa.then((data) => {
                setItems(data);
                setLoading(false);
            })
        } else {
            setItems(() => {
                setItems({"status":"ERROR"});
                setLoading(false);
            }, 1000)
        }
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <Derivations categoria={items} />}
        </div>
    )
};