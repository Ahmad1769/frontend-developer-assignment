import api from "@/utils/api";
import { getOfferById, offersFallback } from "@/features/offers/data/offersFallback";
import { ProductOffer } from "@/features/offers/types/offer.types";

type FetchOffersResult = {
  offers: ProductOffer[];
  isFallback: boolean;
};

export const fetchOffers = async (): Promise<FetchOffersResult> => {
  try {
    const response = await api.get("/offers");
    const data: ProductOffer[] = response.data || [];
    if (data.length > 0) {
      return { offers: data, isFallback: false };
    }
    return { offers: offersFallback, isFallback: true };
  } catch {
    return { offers: offersFallback, isFallback: true };
  }
};

export const fetchOfferById = async (
  id: string | number
): Promise<ProductOffer | null> => {
  try {
    const response = await api.get(`/offers/${id}`);
    return response.data || null;
  } catch {
    return getOfferById(id) || null;
  }
};
