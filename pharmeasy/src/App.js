import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Footer/Banner";
function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
