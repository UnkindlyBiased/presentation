import User from "../../default/User"
import Product from "./Product"

type Order = {
    orderDestination: string
    orderProducts: Product[]
    orderComment: string
    orderBuyer: User
}

export default Order