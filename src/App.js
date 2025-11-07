import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import AirpodsSection from "./components/AirpodsSection"
import ProductSection from "./components/ProductSection"
import four  from "./components/assets/four.jpg"
import  six from "./components/assets/six.jpg"
import eight from "./components/assets/eight.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection
        title="MacBook Air"
        subtitle="Supercharged by M-series chips."
        image={four}
        bg="white"
      />
      <ProductSection
        title="iPad Pro"
        subtitle="Thin. Powerful. Beautiful."
        image={six}
        bg="black"
      />

      {/* Apple Watch Section */}
      <ProductSection
        title="Apple Watch"
        subtitle="Smarter. Brighter. Mightier."
        image={eight}
        bg="white"
      />
      <Footer />
    </div>
  );
}

export default App;