import { ItemServices } from "./ItemServices"

export const Services = ({ items }) => {
    return (
        <div className="row my-5">
            <div className="mb-2 text-center">
                <h3>Nuestros servicios</h3>
            </div>
            <div className="col text-center">
                {items.map(item => <ItemServices key={item.title} send={item} />)}
            </div>
        </div>
    )
}