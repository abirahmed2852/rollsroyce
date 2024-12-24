import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home"; // Assuming your Home component is in the component folder
import About from "./components/About";
import Contact from "./components/Contact";
import Scene from "./Error/Scene";
import Models from "./components/CarModels";
import Lenis from "lenis";

function App() {
  const location = useLocation();
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  useEffect(() => {
    // Disable right-click
    const handleRightClick = (event) => {
      event.preventDefault();
    };


        
    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Scene />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
