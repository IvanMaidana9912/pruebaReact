import { Services } from "./Services"
import { ItemList } from "./ItemList"
import { Error404 } from "../../Error/Error404"

export const Derivations = (categoria) => {
    if (categoria.categoria.status === "ERROR") {
        return <Error404 />
    }
    
    if (categoria.categoria[0].category === "services") {
        return <Services items={categoria.categoria} />
    } else if (categoria.categoria[0].category === "residencial") {
        return <ItemList items={categoria.categoria} />
    } else if (categoria.categoria[0].category === "comercial") {
        return <ItemList items={categoria.categoria} />
    } 
}