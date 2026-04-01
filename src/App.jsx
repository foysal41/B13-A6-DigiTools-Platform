import { Suspense } from "react";
import React, { useState } from "react";
import "./App.css";
import Count from "./Components/Count/Count";
import Hero from "./Components/Hero/Hero";
import PremiumToolCard from "./Components/PremiumToolCard/PremiumToolCard";
import TopNav from "./Components/TopNav/TopNav";
import Pricing from "./Components/Pricing/Pricing";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";


const productDataPromise = fetch("ProductData.json").then((res) => res.json());
const pricingDataPromise = fetch("Pricing.json").then((res) => res.json());
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <TopNav cart={cart}></TopNav>
      <Hero></Hero>
      <Count></Count>
      <Suspense fallback="Loading">
        <PremiumToolCard
          productDataPromise={productDataPromise}
          cart={cart}
          setCart={setCart}
        ></PremiumToolCard>
      </Suspense>
      <Suspense fallback="Loading">
        <Pricing pricingDataPromise={pricingDataPromise}></Pricing>
      </Suspense>
      <CTA></CTA>
      <Footer></Footer>
     
    </>
  );
}

export default App;
