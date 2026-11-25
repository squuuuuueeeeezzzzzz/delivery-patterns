import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class BikeDelivery extends DeliveryStrategy {
    constructor(rate) {
        super();
        this.rate = rate;
    }

    calculate(order) {
        return { type: "Велокурьер", cost: 100 + order.weight * 5 + order.distance * this.rate };
    }
}
