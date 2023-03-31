import { Link } from "react-router-dom";

export const Item = ({ items }) => {
    // const confirm = parseInt(items.id) <= 10  ? "/item/" + items.id : "/item/ "
    return (
        <Link to={"/item/" + items.id} className="text-decoration-none text-dark">
            <div className="card border border-0 card-body text-center" id="itemContainer">
                <img src={items.img[0]} width={200} alt={items.title} />
                <div >
                    <p className="card-text" id="idCardTitle"><b>{items.title}</b></p>
                    <p className="card-text text-start" >{items.slogan}</p>
                </div>
            </div>
        </Link>
    );
};