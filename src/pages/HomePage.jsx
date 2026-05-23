import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import IngredientsSection from "../components/sections/IngredientsSection";
import ProductShowcaseSection from "../components/sections/ProductShowcaseSection";
import PrinciplesSection from "../components/sections/PrinciplesSection";
import StorySection from "../components/sections/StorySection";
import FaqSection from "../components/sections/FaqSection";
import Footer from "../components/sections/Footer";

// Composes the full landing page in the same top-to-bottom order as the live site.
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <IngredientsSection />
      <ProductShowcaseSection />
      <PrinciplesSection />
      <StorySection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default HomePage;
