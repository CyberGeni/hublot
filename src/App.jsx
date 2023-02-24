import { useState } from "react";
import reactLogo from "./assets/react.svg";
import logo from "./assets/logo.svg";
import heroWatch from "./assets/hero-watch.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-['PP_Fragment']">
      <section className="text-white grid grid-cols-[9%_auto_9%] md:grid-cols-[6%_auto_6%]  bg-[url('./assets/bg-pattern-noise.svg')] h-screen w-full bg-black bg-center  bg-blend-normal bg-no-repeat bg-cover">
        <div className="h-full flex flex-col ">
          <div className="border-b border-white/30 h-fit w-full">
            <img
              className="mx-auto my-[21.2px] sm:my-6 w-3 sm:w-fit"
              src={logo}
              alt=""
            />
          </div>
          {/* <div className="border-t border-white/30 h-fit w-full">
            <img className="mx-auto my-6 opacity-0" src={logo} alt="" />
          </div> */}
        </div>
        <div className="h-full border-white/30 border-x flex flex-col justify-between">
          <h1 className="py-3 sm:py-6 w-full h-fit text-center text-lg sm:text-2xl border-b border-white/30">
            HUBLOT
          </h1>
          {/* main content */}
          <main>
            {/* hero */}
            <section className="relative p-8 flex flex-col md:flex-row items-center h-full my-auto">
              <div>
              <h1 className="relative z-20 sm:whitespace-nowrap md:whitespace-normal text-4xl md:text-5xl text-[#E4E4E7]">
                Elegance and Precision: <br />{" "}
                <span className="text-white/60">
                  The finest luxury watches.
                </span>
              </h1>
              <p className="relative z-20 w-5/6 sm:w-3/5 sm:text-justify my-5">
                Experience the timeless beauty and unparalleled craftsmanship of
                our luxurious timepieces. Each piece is meticulously designed
                and crafted using only the finest materials, ensuring durability
                and longevity.{" "}
              </p>
              <button className="border w-3/5 flex items-center justify-between px-5 py-3">
                Shop now{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              </div>
              <div className="w-full sm:w-2/3 md:w-full absolute lg:static -right-1 ml-0 opacity-30 sm:opacity-70 md:opacity-100  sm:z-10  sm:blur-none md:blur-none -bottom-8">
                <img className="w-3/5 sm:w-2/3 md:w-2/5 lg:w-4/5 absolute lg:static -bottom-12 md:-bottom-28 right-0 -z-10" src={heroWatch} alt="" />
              </div>
              
            </section>
      
          </main>
          <h1 className="py-6 w-full h-fit text-center text-2xl border-white/30 text-transparent">
            HUBLOT
          </h1>
        </div>
        {/* right panel */}
        <div className="h-full flex flex-col justify-between">
          <div className="border-b border-white/30 h-fit w-full">
            <svg
              className="w-3 sm:w-full mx-auto my-3.5 sm:my-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                fill="rgba(236,240,241,1)"
              />
            </svg>
          </div>
          {/* <div className="border-t border-white/30 h-fit w-full">
            <svg
              className="mx-auto my-7 opacity-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                fill="rgba(236,240,241,1)"
              />
            </svg>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
