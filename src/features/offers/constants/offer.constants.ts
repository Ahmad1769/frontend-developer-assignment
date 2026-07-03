export const OFFER_ROUTES = {
  EXPLORE: "/explore",
  DASHBOARD: "/dashboard",
  PRODUCT: (id: number | string) => `/product/${id}`,
} as const;

export const OFFER_LABELS = {
  EXPLORE_TITLE: "Explore Properties",
  EXPLORE_SUBTITLE:
    "Browse tokenized real estate offers. Click a property card to view full details, yields, and pricing.",
  PRODUCT_DESCRIPTION: "Product Description",
  KEY_FEATURES: "Key Features",
  VIEW_OFFER: "View Offer",
  LOADING_OFFERS: "Loading properties...",
  LOADING_PRODUCT: "Loading offer details...",
  NOT_FOUND: "Offer not found",
  BACK_TO_EXPLORE: "Back to Explore",
  EXPLORE_LINK: "Explore",
  ADD_TO_CART: "Add to Cart",
  LIVE_OFFER: "Live Offer",
  EMPTY_SEARCH: "No properties match your search.",
  FALLBACK_MESSAGE: "Using demo data — start backend for live offers.",
} as const;

export const OFFER_TABLE_COLUMNS = [
  "Offer ID",
  "Property",
  "Offer Token",
  "Buyer token",
  "Rate of Return",
  "offer Yield",
  "Official price",
  "Asked Price",
  "Stock",
  "Cart",
  "View",
] as const;
