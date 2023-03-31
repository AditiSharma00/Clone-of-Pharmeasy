import "./App.css";

import Content from "./Components/HomePage/Content";
import NavBar from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { SingleProductPage } from "./Pages/SingleProdPage/SingleProductPage";


function App() {
  return <div>

    <NavBar />
    <Content />
    <AllRoutes />
    <SingleProductPage />
  </div>;


}

export default App;
