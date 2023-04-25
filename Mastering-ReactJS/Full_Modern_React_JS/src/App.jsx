import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import Hello from "./Components/Hello";

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
