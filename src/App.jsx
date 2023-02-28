import { useState } from "react";
import hand from "./assets/hand.png";
import "./App.css";
import Slider from "./components/Slider";
import RotatingText from "./components/RoatingText";
import SleekHover from "./components/SleekHover";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-text">
      <Hero />
      {/* top sellers */}
      <section className=" bg-black border-b border-white/30">
        <div className="w-[82%] p-8 md:w-[88%] mx-auto border-x border-white/30">
          {/* text */}
          <div>
            <p className="text-[#A0A0AB] my-6 text-sm">TOP SELLERS</p>
            <div className="md:grid md:grid-cols-6 md:place-content-start md:items-start">
              <h2 className="text-[#E4E4E7] text-2xl col-span-2">The Most Coveted Luxury Watches</h2>
              <p className="text-[#A0A0AB] font-sans col-span-4 md:text-right">Indulge in the finest timepieces from the most coveted luxury watch brands in the world. From the classic elegance of a Rolex to the cutting-edge technology of a Breitling, these watches are more than just accessories.</p>
            </div>
          </div>

          {/* slider */}
          <Slider />
        </div>
      </section>

      {/* craftmanship */}
      <section className="min-h-screen bg-black border-b border-white/30 h-full">
        <div className="">
          <div className="w-[82%] min-h-screen p-8 md:w-[88%] mx-auto  border-white/30 grid md:grid-cols-2 gap-10 border-x">
          <div>
            <h4 className="text-[#A0A0AB] font-text">THE FINEST IN CRAFTSMANSHIP</h4>
            <h1 className="text-[#E4E4E7] font-serif text-2xl my-3 mb-5 w-4/5">Experience the Finest Features in Our Luxury Timepieces</h1>
            <RotatingText />
          </div>
          <div>
            <img className="w-4/5 my-auto mx-auto opacity-20 md:opacity-100" src={hand} alt="" />
          </div>
        </div>
        </div>
        
      </section>

      {/* shop from  selection */}
      <section className="bg-black border-b border-white/30 h-full">
        <div className="w-[82%] md:w-[88%] mx-auto border-x border-white/30">
          <SleekHover />
        </div>
      </section>
    </div>
  );
}

export default App;
