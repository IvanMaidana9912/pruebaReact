import { Item } from "../Item";
import { LogosMarcas } from "../../LogosMarcas/Logos";

export const ItemList = ({ items }) => {

    return (
        <div>
            <div className="container">
                <div>
                    {/* <p className="paraphStyle"><b>{primeraLetraMayuscula}</b></p> */}
                </div>
                <div className="d-inline-flex justify-content-start flex-wrap">
                    {
                        items.map((item, index) =>
                            <div className="" key={index}>
                                <Item items={item} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=" logosmarginabajo mt-5">
                <LogosMarcas />
            </div>
        </div>
    );
};
