import "./App.css";

import { NavContents } from "./Components/NavContents";
import { ProductCard } from "./Pages/ProductPage/ProductCard";
import { Products } from "./Pages/ProductPage/Products";
import Content from "./Components/HomePage/Content";
import NavBar from "./Components/Navbar";

function App() {
  return <div>

     <NavBar />
      <Content />
    <NavContents/>
    <Products/>
    <ProductCard/>
  </div>;


}

export default App;
