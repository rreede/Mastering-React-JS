import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
