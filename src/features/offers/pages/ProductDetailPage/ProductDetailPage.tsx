import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductHeader from "@/features/offers/components/ProductDetail/ProductHeader";
import ProductHero from "@/features/offers/components/ProductDetail/ProductHero";
import ProductOfferPanel from "@/features/offers/components/ProductDetail/ProductOfferPanel";
import ProductInfoPanel from "@/features/offers/components/ProductDetail/ProductInfoPanel";
import ProductContactFooter from "@/features/offers/components/ProductDetail/ProductContactFooter";
import { OFFER_LABELS, OFFER_ROUTES } from "@/features/offers/constants/offer.constants";
import { useOffer } from "@/features/offers/hooks/useOffer";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { offer, loading } = useOffer(id);

  if (loading) {
    return (
      <div className={styles.page}>
        <p className={styles.loading}>{OFFER_LABELS.LOADING_PRODUCT}</p>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1>{OFFER_LABELS.NOT_FOUND}</h1>
          <button type="button" onClick={() => navigate(OFFER_ROUTES.EXPLORE)}>
            {OFFER_LABELS.BACK_TO_EXPLORE}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <ProductHeader product={offer} />
      <main className={styles.main}>
        <ProductHero product={offer} />
        <div className={styles.contentGrid}>
          <ProductOfferPanel product={offer} />
          <ProductInfoPanel product={offer} />
        </div>
      </main>
      <ProductContactFooter product={offer} />
    </div>
  );
};

export default ProductDetailPage;
