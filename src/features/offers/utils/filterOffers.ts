import { ProductOffer } from "@/features/offers/types/offer.types";

export const filterOffers = (
  offers: ProductOffer[],
  query: string
): ProductOffer[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return offers;

  return offers.filter(
    (offer) =>
      offer.name.toLowerCase().includes(normalizedQuery) ||
      offer.offerToken.toLowerCase().includes(normalizedQuery) ||
      offer.buyerToken.toLowerCase().includes(normalizedQuery) ||
      offer.location.toLowerCase().includes(normalizedQuery) ||
      String(offer.id).includes(normalizedQuery)
  );
};
