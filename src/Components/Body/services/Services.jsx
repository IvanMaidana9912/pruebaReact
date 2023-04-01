import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import ServicesJson from "../../../BBDD/services.json"


const Services = () => {
    const [item, setItem] = useState({});
    const [setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ServicesJson.find(item => item.id === id));
            }, 1900)
        });
        promesa.then((data) => {
            setItem(data);
            setLoading(false);
        });
    }, [id]);


    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-3 text-center">
                <img src={item.img} className="img-fluid" alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
            </div>
        </div>
    )



}

export default Services