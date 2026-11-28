import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class PartnerDelivery extends DeliveryStrategy {
    constructor(PartnerShippingApi) {
        super();
        this.PartnerShippingApi = PartnerShippingApi;
    }

    calculate(order) {
        
        return { type: "Партнерская доставка", cost: partnerCost };
    }
}