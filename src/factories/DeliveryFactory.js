import { DroneDelivery } from "../strategies/DroneDeliveryStrategy.js";
import { BikeDelivery } from "../strategies/BikeDeliveryStrategy.js";
import { CarDelivery } from "../strategies/CarDeliveryStrategy.js";
import { TruckDelivery } from "../strategies/TruckDeliveryStrategy.js";

export class DeliveryFactory {
    create(order) {

        const RATES = { drone: 1, bike: 1, car: 3, truck: 6 };

        if (order.weight <= 2 && order.distance <= 5) {
            return new DroneDelivery(RATES.drone);
        } else if (order.weight <= 5 && order.distance <= 10) {
            return new BikeDelivery(RATES.bike);
        } else if (order.weight <= 30 && order.distance <= 45) {
            return new CarDelivery(RATES.car);
        } else {
            return new TruckDelivery(RATES.truck);
        }
    }
}