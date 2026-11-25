import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class DroneDelivery extends DeliveryStrategy {
    constructor(rate) {
        super();
        this.rate = rate;
    }

    calculate(order) {
        return { type: "Дрон", cost: 700 + order.weight * 2 + order.distance * this.rate };
    }
}
