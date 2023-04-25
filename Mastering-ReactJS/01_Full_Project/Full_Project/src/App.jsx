import "./App.css";
import Header from "./Header";
import BestOffers from "./BestOffers";

import MainProductTypes from "./MainProductTypes";
import Footer from "./Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainProductTypes />
      <BestOffers />
      <Footer />
    </div>
  );
}

export default App;
