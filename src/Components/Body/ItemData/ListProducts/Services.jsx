import { ItemServices } from "./ItemServices"
import { LogosMarcas } from "../../LogosMarcas/Logos"

export const Services = ({ items }) => {
    return (
        <div>
            <div className="row my-5">
                <div className="mb-2 text-center">
                    <h3>Nuestros servicios</h3>
                </div>
                <div className="col text-center">
                    {items.map(item => <ItemServices key={item.title} send={item} />)}
                </div>
            </div>
            <div className="row">
                <LogosMarcas />
            </div>
        </div>
    )
}