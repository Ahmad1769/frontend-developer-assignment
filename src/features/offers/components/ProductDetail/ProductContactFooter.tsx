import React from "react";
import { ProductOffer } from "@/features/offers/types/offer.types";
import styles from "./ProductDetail.module.css";

type ProductContactFooterProps = {
  product: ProductOffer;
};

const ProductContactFooter = ({ product }: ProductContactFooterProps) => (
  <footer className={styles.productFooter}>
    <div className={styles.footerInner}>
      <div className={styles.footerBrand}>
        <p className={styles.footerTitle}>eSTOKKYAM Support</p>
        <p className={styles.footerSub}>Questions about this offer?</p>
      </div>
      <div className={styles.contactGrid}>
        <div>
          <p className={styles.contactLabel}>Email</p>
          <a href={`mailto:${product.contact.email}`}>{product.contact.email}</a>
        </div>
        <div>
          <p className={styles.contactLabel}>Phone</p>
          <a href={`tel:${product.contact.phone.replace(/\s/g, "")}`}>
            {product.contact.phone}
          </a>
        </div>
        <div>
          <p className={styles.contactLabel}>Office</p>
          <p>{product.contact.address}</p>
        </div>
      </div>
    </div>
  </footer>
);

export default ProductContactFooter;
