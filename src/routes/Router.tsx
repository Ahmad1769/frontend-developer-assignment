import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "@/components/loadable/Loadable";

const Layout = Loadable(lazy(() => import("@/components/layout/Layout")));
const Explore = Loadable(lazy(() => import("@/views/explore/Explore")));
const Dashboard = Loadable(lazy(() => import("@/views/dashboard/Dashboard")));
const ProductPage = Loadable(lazy(() => import("@/views/product/ProductPage")));
const Sell = Loadable(lazy(() => import("@/views/sell/Sell")));
const Login = Loadable(lazy(() => import("@/views/login/Login")));
const Notfound = Loadable(
  lazy(() => import("@/components/errorboundary/404"))
);

const Router = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/explore" /> },
      { path: "/explore", element: <Explore /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/sell", element: <Sell /> },
      { path: "/login", element: <Login /> },
      { path: "/auth/404", element: <Notfound /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
