import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { OFFER_LABELS } from "@/features/offers/constants/offer.constants";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./ProductDetail.module.css";

type ProductInfoPanelProps = {
  product: ProductOffer;
};

const ProductInfoPanel = ({ product }: ProductInfoPanelProps) => (
  <section className={styles.infoPanel}>
    <div className={styles.descriptionBlock}>
      <h2 className={styles.sectionTitle}>{OFFER_LABELS.PRODUCT_DESCRIPTION}</h2>
      <p className={styles.description}>{product.description}</p>
    </div>
    <div className={styles.featuresBlock}>
      <h2 className={styles.sectionTitle}>{OFFER_LABELS.KEY_FEATURES}</h2>
      <ul className={styles.featuresList}>
        {product.features.map((feature) => (
          <li key={feature.title} className={styles.featureItem}>
            <VerifiedIcon className={styles.featureIcon} />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ProductInfoPanel;
