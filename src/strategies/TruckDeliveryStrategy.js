import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class TruckDelivery extends DeliveryStrategy {
    constructor(rate) {
        super();
        this.rate = rate;
    }

    calculate(order) {
        return { type: "Фура", cost: 500 + order.weight * 10 + order.distance * this.rate };
    }
}

