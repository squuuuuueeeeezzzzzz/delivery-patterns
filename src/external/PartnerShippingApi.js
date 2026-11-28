export class PartnerShippingApi {
  getQuote(weightGrams, distanceMeters) {
    const priceCents = 5000 + weightGrams * 0.02 + distanceMeters * 0.004;
    return { price_cents: Math.round(priceCents), currency: "RUB" };
  }
}