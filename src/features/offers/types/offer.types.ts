export type OfferFeature = {
  title: string;
  description: string;
};

export type OfferContact = {
  email: string;
  phone: string;
  address: string;
};

export type ProductOffer = {
  id: number;
  offerToken: string;
  name: string;
  buyerToken: string;
  rateOfReturn: string;
  offerYield: string;
  yieldDiff: string;
  officialPrice: string;
  askedPrice: string;
  priceDiff: string;
  stock: string;
  location: string;
  image: string;
  sellerAddress: string;
  description: string;
  features: OfferFeature[];
  contact: OfferContact;
};

export type OffersApiResponse = {
  success: boolean;
  data: ProductOffer[];
};

export type OfferApiResponse = {
  success: boolean;
  data: ProductOffer;
};
