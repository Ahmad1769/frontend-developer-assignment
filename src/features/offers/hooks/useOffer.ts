import { useEffect, useState } from "react";
import { fetchOfferById } from "@/features/offers/services/offerService";
import { ProductOffer } from "@/features/offers/types/offer.types";

type UseOfferResult = {
  offer: ProductOffer | null;
  loading: boolean;
};

export const useOffer = (id?: string): UseOfferResult => {
  const [offer, setOffer] = useState<ProductOffer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setOffer(null);
      setLoading(false);
      return;
    }

    const loadOffer = async () => {
      setLoading(true);
      const data = await fetchOfferById(id);
      setOffer(data);
      setLoading(false);
    };

    loadOffer();
  }, [id]);

  return { offer, loading };
};
