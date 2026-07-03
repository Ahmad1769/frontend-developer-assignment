import { useMemo, useState } from "react";
import { ProductOffer } from "@/features/offers/types/offer.types";
import { filterOffers } from "@/features/offers/utils/filterOffers";

export const useOfferSearch = (offers: ProductOffer[]) => {
  const [search, setSearch] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const filteredOffers = useMemo(
    () => filterOffers(offers, filterQuery),
    [offers, filterQuery]
  );

  const handleSearchSubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setFilterQuery(search);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setFilterQuery("");
  };

  return {
    search,
    setSearch,
    filteredOffers,
    handleSearchSubmit,
    clearSearch,
  };
};
