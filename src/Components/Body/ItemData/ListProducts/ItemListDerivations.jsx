import { Services } from "./Services"
import { ItemList } from "./ItemList"

export const Derivations = (categoria) => {

    if (categoria.categoria[0].category === "services") {
        return <Services items={categoria.categoria} />
    } else if (categoria.categoria[0].category === "residencial") {
        return <ItemList items={categoria.categoria} />
    } else if (categoria.categoria[0].category === "comercial") {
        return <ItemList items={categoria.categoria} />
    }
}