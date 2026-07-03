import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { OFFER_LABELS, OFFER_ROUTES } from "@/features/offers/constants/offer.constants";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./ProductDetail.module.css";

type ProductHeaderProps = {
  product: ProductOffer;
};

const ProductHeader = ({ product }: ProductHeaderProps) => (
  <header className={styles.productHeader}>
    <div className={styles.headerInner}>
      <Link to={OFFER_ROUTES.EXPLORE} className={styles.backLink}>
        <ArrowBackIcon fontSize="small" />
        <span>{OFFER_LABELS.EXPLORE_LINK}</span>
      </Link>
      <h1 className={styles.productName}>{product.name}</h1>
      <span className={styles.offerBadge}>Offer #{product.id}</span>
    </div>
  </header>
);

export default ProductHeader;
