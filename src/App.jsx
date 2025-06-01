// --- FILE: src/App.jsx ---
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import PlantLoader from "../src/components/plantloader";
import RoutesConfig from "../src/Routes";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Show loader on every route change
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [location]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <>
      {loading && <PlantLoader />}
      <RoutesConfig />
    </>
  );
}
