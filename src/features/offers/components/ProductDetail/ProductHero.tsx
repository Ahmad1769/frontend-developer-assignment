import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { OFFER_LABELS } from "@/features/offers/constants/offer.constants";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./ProductDetail.module.css";

type ProductHeroProps = {
  product: ProductOffer;
};

const ProductHero = ({ product }: ProductHeroProps) => (
  <section className={styles.heroSection} aria-label="Product overview">
    <div className={styles.heroImageWrap}>
      <img
        src={product.image}
        alt={`${product.offerToken} property token`}
        className={styles.heroImage}
      />
      <div className={styles.statsCard}>
        <p className={styles.statsTitle}>{OFFER_LABELS.LIVE_OFFER}</p>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Yield</span>
            <span className={styles.statValue}>{product.offerYield}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Asked</span>
            <span className={styles.statValue}>{product.askedPrice}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Stock</span>
            <span className={styles.statValue}>{product.stock}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Return</span>
            <span className={styles.statValue}>{product.rateOfReturn}</span>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.locationBar}>
      <PlaceIcon className={styles.locationIcon} />
      <span>{product.location}</span>
    </div>
  </section>
);

export default ProductHero;
