import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import { OFFER_LABELS, OFFER_ROUTES } from "@/features/offers/constants/offer.constants";
import { MARKETPLACE_THEME } from "@/features/offers/constants/marketplace.theme";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./OfferCard.module.css";

export type OfferCardProps = {
  offer: ProductOffer;
};

const OfferCard = ({ offer }: OfferCardProps) => {
  const navigate = useNavigate();

  const handleOpen = () => navigate(OFFER_ROUTES.PRODUCT(offer.id));

  return (
    <article
      className={styles.card}
      onClick={handleOpen}
      onKeyDown={(event) => event.key === "Enter" && handleOpen()}
      role="button"
      tabIndex={0}
      aria-label={`View ${offer.name}`}
    >
      <div className={styles.imageWrap}>
        <img src={offer.image} alt={offer.name} className={styles.image} />
        <span className={styles.badge}>{offer.offerToken}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{offer.name}</h3>
        <p className={styles.location}>
          <PlaceIcon
            sx={{
              fontSize: 14,
              verticalAlign: "middle",
              mr: 0.5,
              color: MARKETPLACE_THEME.accent,
            }}
          />
          {offer.location}
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Yield</span>
            <span className={styles.statValue}>{offer.offerYield}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Asked</span>
            <span className={styles.statValue}>{offer.askedPrice}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Stock</span>
            <span className={styles.statValue}>{offer.stock}</span>
          </div>
        </div>
        <button
          type="button"
          className={styles.cta}
          onClick={(event) => {
            event.stopPropagation();
            handleOpen();
          }}
        >
          {OFFER_LABELS.VIEW_OFFER}
        </button>
      </div>
    </article>
  );
};

export default OfferCard;
