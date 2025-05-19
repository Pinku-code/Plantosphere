import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Overview from "../components/Overview";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Overview />
      <Highlights />
      <Testimonials />
      <Footer />
    </>
  );
}