export class OrderProcessor {
    constructor(factory) {
        this.factory = factory;
    }

    validate(order) {
        if (typeof order.weight !== "number" || order.weight <= 0
            || typeof order.distance !== "number" || order.distance <= 0
        ) {
            throw new Error("Вес и расстояние указаны некорректно, исправьте пожалуйста!"
                + "\n" + "вес: " + order.weight + "\n" + "расстояние: " + order.distance);
        }
    }

    process(order) {

        this.validate(order);
        const strategy = this.factory.create(order);
        const delivery = strategy.calculate(order);
        return { order, delivery };
    }
}