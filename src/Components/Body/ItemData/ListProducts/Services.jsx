import { ItemServices } from "./ItemServices"

export const Services = ({ items }) => {
    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-3 text-center">
                {items.map(item => <ItemServices key={item.title} send={item} />)}
            </div>
        </div>
    )
}