import { Item } from "../Item";
import { LogosMarcas } from "../../LogosMarcas/Logos";

export const ItemList = ({ items }) => {

    const primeraLetraMayuscula = `${items[0].category[0].toUpperCase()}${items[0].category.slice(1)}`
    return (
        <div className="container">
            <div>
                {/* <p className="paraphStyle"><b>{primeraLetraMayuscula}</b></p> */}
            </div>
            <div className="d-inline-flex justify-content-center flex-wrap">
                {
                    items.map((item, index) =>
                        <div className="" key={index}>
                            <Item items={item} />
                        </div>
                    )
                }
            </div>
            <LogosMarcas />
        </div>
    );
};
