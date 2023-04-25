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

        <Hello firstName="Rene" heroName="Batman" />
        <Hello firstName="Madis" heroName="Superman" />
        <Hello firstName="Eero" heroName="Thor" />
      </div>
    </>
  );
}

export default App;
