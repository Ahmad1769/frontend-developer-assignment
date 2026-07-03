import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "@/components/text/SearchText";
import OfferCard from "@/features/offers/components/OfferCard";
import LoadingState from "@/features/offers/components/LoadingState/LoadingState";
import EmptyState from "@/features/offers/components/EmptyState/EmptyState";
import { OFFER_LABELS } from "@/features/offers/constants/offer.constants";
import { useOffers } from "@/features/offers/hooks/useOffers";
import { useOfferSearch } from "@/features/offers/hooks/useOfferSearch";
import themeStyles from "@/features/offers/constants/marketplace.theme.module.css";
import styles from "./ExplorePage.module.css";

const ExplorePage = () => {
  const { offers, loading, error, isFallback } = useOffers();
  const {
    search,
    setSearch,
    filteredOffers,
    handleSearchSubmit,
    clearSearch,
  } = useOfferSearch(offers);

  return (
    <Box className={themeStyles.root}>
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <Typography className={styles.title} component="h1">
            {OFFER_LABELS.EXPLORE_TITLE}
          </Typography>
          <Typography className={styles.subtitle}>
            {OFFER_LABELS.EXPLORE_SUBTITLE}
          </Typography>
          <Box sx={{ maxWidth: 600 }}>
            <SearchBar
              search={search}
              handleSearch={setSearch}
              handleKeyDown={handleSearchSubmit}
            />
          </Box>
        </div>
      </section>

      {isFallback && error && (
        <p className={styles.fallbackBanner}>{error}</p>
      )}

      <section className={styles.content}>
        {loading ? (
          <LoadingState
            message={OFFER_LABELS.LOADING_OFFERS}
            className={styles.loading}
          />
        ) : filteredOffers.length === 0 ? (
          <EmptyState
            message={OFFER_LABELS.EMPTY_SEARCH}
            actionLabel="Clear search"
            onAction={clearSearch}
            className={styles.empty}
            actionClassName={styles.emptyLink}
          />
        ) : (
          <div className={styles.grid}>
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        )}
      </section>
    </Box>
  );
};

export default ExplorePage;
