import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import NotFound from "./NotFound";
import { Products } from "../Pages/ProductPage/Products";
// import { SingleProductPage } from "../Pages/SingleProdPage/SingleProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/products" element={<Products />} />
      {/* <Route path="/products/:id" element={<SingleProductPage />} /> */}

      <Route path="/search/:name" element={<Search />}></Route>
    </Routes>
  );
}

export default AllRoutes;
