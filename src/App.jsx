
import CTA from "./components/CTA";
import Features from "./components/Features";
import FeaturesGrid from "./components/FeaturesGrid";
import Footers from "./components/Footers";
import Heros from "./components/Heros";
import Navbars from "./components/Navbars";
import Securitys from "./components/Securitys";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Tiers from "./components/Tiers";
import Trusts from "./components/Trusts";


export default function App() {
  return (
    <>
     
      <div className="bg-[#0a0a0f] min-h-screen">
       <Navbars/>
        <Heros />
        <Trusts />
        <Features />
        <Stats />
        <Tiers />
        <Testimonials />
        <Securitys />
        <CTA />
        <Footers />
      </div>
    </>
  );
}