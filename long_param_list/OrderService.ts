import User from "../default/User";
import Order from "./types/Order";
import Product from "./types/Product";

class OrderService {
    async getOrders(): Promise<void> {
        // Fetching logic
    }
    
    // ! Bad example
    async createOrderWrong(orderDestination: string, orderProducts: Product[], orderComment: string, orderBuyer: User): Promise<void> {
        // Creation logic
    }
    
    // * Good example
    async createOrderRight(order: Order): Promise<void> {
        // Creation logic
    }
}