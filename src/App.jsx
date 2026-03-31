import { Suspense } from "react";
import "./App.css";
import Count from "./Components/Count/Count";
import Hero from "./Components/Hero/Hero";
import PremiumToolCard from "./Components/PremiumToolCard/PremiumToolCard";
import TopNav from "./Components/TopNav/TopNav";


const productDataPromise = fetch("ProductData.json").then((res) => res.json());
function App() {
  return (
    <>
      <TopNav></TopNav>
      <Hero></Hero>
      <Count></Count>
      <Suspense fallback="Loading">
        <PremiumToolCard productDataPromise={productDataPromise}></PremiumToolCard>
      </Suspense>
    </>
  );
}

export default App;
