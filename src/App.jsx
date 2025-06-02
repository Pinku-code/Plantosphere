// --- FILE: src/App.jsx ---
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlantLoader from "../src/components/plantloader";
import RoutesConfig from "../src/Routes";
import { useLocation } from "react-router-dom";
import { initGA, trackPageview } from "./lib/analytics";

export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  // google-analytics set-up 
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);

  // Show loader on every route change
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {loading && <PlantLoader />}
      <RoutesConfig />
    </>
  );
}
