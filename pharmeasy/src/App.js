import "./App.css";
import { NavContents } from "./Components/NavContents";
import { ProductCard } from "./Pages/ProductPage/ProductCard";
import { Products } from "./Pages/ProductPage/Products";

function App() {
  return <div>

    
    <NavContents/>
    <Products/>
    <ProductCard/>
  </div>;
}

export default App;
