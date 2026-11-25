import { DroneDelivery } from "../strategies/DroneDeliveryStrategy.js";

export class NightDeliveryFactory {
    create(order) {
        if (order.weight <= 2 && order.distance <= 5) {
            return new DroneDelivery(1);
        } else {
            throw new Error("Ночью доставка невозможна: слишком тяжёлый или далёкий заказ");
        }
    }
}