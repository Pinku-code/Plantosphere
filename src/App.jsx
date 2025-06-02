// --- FILE: src/App.jsx ---
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlantLoader from "../src/components/plantloader";
import RoutesConfig from "../src/Routes";

export default function App() {
  const [loading, setLoading] = useState(false);

  // Show loader on every route change
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

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
