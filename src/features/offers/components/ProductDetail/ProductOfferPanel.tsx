import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { OFFER_LABELS } from "@/features/offers/constants/offer.constants";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./ProductDetail.module.css";

type ProductOfferPanelProps = {
  product: ProductOffer;
};

type DetailField = {
  label: string;
  value: string;
  highlight?: boolean;
  mono?: boolean;
};

const buildDetailFields = (product: ProductOffer): DetailField[] => [
  { label: "Offer Token", value: product.offerToken },
  { label: "Buyer Token", value: product.buyerToken },
  { label: "Official Price", value: product.officialPrice },
  { label: "Price Difference", value: product.priceDiff, highlight: true },
  { label: "Seller Address", value: product.sellerAddress, mono: true },
  { label: "Quantity Available", value: product.stock },
];

const ProductOfferPanel = ({ product }: ProductOfferPanelProps) => (
  <section className={styles.offerPanel} aria-label="Offer details">
    <div className={styles.offerNumberBox}>
      <p className={styles.offerNumberLabel}>Offer Number</p>
      <p className={styles.offerNumberValue}>{product.id}</p>
    </div>
    <dl className={styles.detailList}>
      {buildDetailFields(product).map((field) => (
        <div key={field.label} className={styles.detailRow}>
          <dt>{field.label}</dt>
          <dd
            className={[
              field.highlight ? styles.highlight : "",
              field.mono ? styles.mono : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {field.value}
          </dd>
        </div>
      ))}
    </dl>
    <button type="button" className={styles.cartButton}>
      {OFFER_LABELS.ADD_TO_CART}
      <ShoppingCartOutlinedIcon />
    </button>
  </section>
);

export default ProductOfferPanel;
