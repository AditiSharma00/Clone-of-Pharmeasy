import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import NotFound from "./NotFound";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/search/:name" element={<Search />}></Route>
    </Routes>
  );
}

export default AllRoutes;
