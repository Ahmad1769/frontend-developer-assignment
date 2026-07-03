import { useEffect, useState } from "react";
import { OFFER_LABELS } from "@/features/offers/constants/offer.constants";
import { fetchOffers } from "@/features/offers/services/offerService";
import { ProductOffer } from "@/features/offers/types/offer.types";

type UseOffersResult = {
  offers: ProductOffer[];
  loading: boolean;
  error: string | null;
  isFallback: boolean;
};

export const useOffers = (): UseOffersResult => {
  const [offers, setOffers] = useState<ProductOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const loadOffers = async () => {
      const { offers: data, isFallback: fallback } = await fetchOffers();
      setOffers(data);
      setIsFallback(fallback);
      setError(fallback ? OFFER_LABELS.FALLBACK_MESSAGE : null);
      setLoading(false);
    };

    loadOffers();
  }, []);

  return { offers, loading, error, isFallback };
};
