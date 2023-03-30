import "./App.css";

import Content from "./Components/HomePage/Content";
import NavBar from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes/AllRoutes";

function App() {
  return <div>

     <NavBar />
      <Content />
    <AllRoutes/>
  </div>;


}

export default App;
