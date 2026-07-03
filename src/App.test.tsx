import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ExplorePage, ProductDetailPage } from "@/features/offers";
import api from "@/utils/api";

const mockProduct = {
  id: 371,
  offerToken: "Token 1",
  name: "Humble TX Residential Token #371",
  buyerToken: "USDC",
  rateOfReturn: "10%",
  offerYield: "12%",
  yieldDiff: "20%",
  officialPrice: "$51.35",
  askedPrice: "$60.00",
  priceDiff: "16.85%",
  stock: "12.28838",
  location: "20550 Townsen Blvd, Humble TX",
  image: "/images/product-token.svg",
  sellerAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0",
  description: "Test property token description.",
  features: [{ title: "Verified Property", description: "On-chain asset." }],
  contact: {
    email: "support@estokkyam.io",
    phone: "+1 (555) 012-8842",
    address: "San Francisco, CA",
  },
};

beforeEach(() => {
  jest.spyOn(api, "get").mockImplementation((url: string) => {
    if (url === "/offers") {
      return Promise.resolve({ success: true, data: [mockProduct] });
    }
    if (url.startsWith("/offers/")) {
      return Promise.resolve({ success: true, data: mockProduct });
    }
    return Promise.reject(new Error("Not found"));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders explore page with product cards", async () => {
  render(
    <MemoryRouter initialEntries={["/explore"]}>
      <Routes>
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/Explore Properties/i)).toBeInTheDocument();
  expect(await screen.findByText(/Humble TX Residential Token #371/i)).toBeInTheDocument();
  expect(screen.getByText(/View Offer/i)).toBeInTheDocument();
});

test("renders product detail page", async () => {
  render(
    <MemoryRouter initialEntries={["/product/371"]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/Humble TX Residential Token #371/i)).toBeInTheDocument();
  expect(screen.getByText(/Key Features/i)).toBeInTheDocument();
  expect(screen.getByText(/Product Description/i)).toBeInTheDocument();
});
