import { DeliveryFactory } from "./src/factories/DeliveryFactory.js";
import { NightDeliveryFactory } from "./src/factories/NightDeliveryFactory.js";
import { OrderProcessor } from "./src/OrderProcessor.js";

const dayProcessor = new OrderProcessor(new DeliveryFactory());
const nightProcessor = new OrderProcessor(new NightDeliveryFactory());

const orders = [
  { weight: 2, distance: 5 },
  { weight: 5, distance: 10 },
  { weight: 3, distance: 6 },
  { weight: 50, distance: 100 },
  { weight: -5, distance: "bc" },
  { weight: "abc", distance: -10 }
];

for (const order of orders) {
  try {
    console.log("День:", dayProcessor.process(order));
  } catch (e) {
    console.log("Ошибка:", e.message);
  }
}

for (const order of orders) {
  try {
    console.log("Ночь:", nightProcessor.process(order));
  } catch (e) {
    console.log("Ошибка:", e.message);
  }
}