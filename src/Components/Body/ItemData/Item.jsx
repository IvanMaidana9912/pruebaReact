import { Link } from "react-router-dom";

export const Item = ({ items }) => {
    return (
        <Link to={"/item/" + items.id} className="text-decoration-none text-dark">
            <div className="card border border-0 card-body text-center me-5" id="itemContainer">
                {items.img ? <img src={items.img[0]} alt={items.title} />: ""}
                <div >
                    <p className="card-text" id="idCardTitle"><b>{items.title}</b></p>
                    <p className="card-text text-start" >{items.slogan}</p>
                </div>
            </div>
        </Link>
    );
};