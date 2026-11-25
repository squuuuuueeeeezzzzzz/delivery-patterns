import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class CarDelivery extends DeliveryStrategy {
    constructor(rate) {
        super();
        this.rate = rate;
    }

    calculate(order) {
        return { type: "Авто", cost: 200 + order.weight * 8 + order.distance * this.rate };
    }
}
