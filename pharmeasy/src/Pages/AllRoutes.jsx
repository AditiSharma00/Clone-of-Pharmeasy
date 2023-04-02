import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import NotFound from "./NotFound";
import { Products } from "../Pages/ProductPage/Products";
import { SingleProductPage } from "../Pages/SingleProdPage/SingleProductPage";
import Cart from "./Cart/Cart";
import Payment from "./PaymentPage/Payment";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/search/:name" element={<Search />}></Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default AllRoutes;
