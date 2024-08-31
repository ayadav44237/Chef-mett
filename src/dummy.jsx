import { useState } from "react";
import "./App.css";

import Leaf from "./assets/images/leaf.png";
import Honey1 from "./assets/images/choney.jpeg";
import Honey2 from "./assets/images/coil.jpeg";
import Honey3 from "./assets/images/mhoney.jpeg";
import Honey4 from "./assets/images/hhoney.jpeg";
import DryFruits from "./assets/images/dryfruits.png";
import Bacon from "./assets/images/bacon.jpeg";
import Signature from "./assets/images/signature.png";

import InfoSection from "./InfoSection";
import HeroSection from "./HeroSection";
import ImageGrid from "./ImageGrid";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-black text-white p-3">
        <h1 className="text-2xl">{menuOpen ? "Main Menu" : "Homepage"}</h1>
      </nav>

      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="ml-[80px] -mt-20">
        <img
          src={Leaf}
          className="w-64 h-64 object-cover"
          alt="Leaf"
        />
      </section>

      <div className="ml-[180px]">
        <section className="py-8 -mt-28">
          <h1 className="text-orange-400 text-2xl">CHEF MATT PRODUCTS</h1>
          <hr className="border-t-2 border-custom-color h-4 w-1/2 my-4" />
          <p className="text-white text-xs">
            Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
            yourself and thank us later.
          </p>
        </section>

        <section className="flex overflow-x-auto p-4 gap-4 no-scrollbar">
          {[Honey1, Honey2, Honey3, Honey4].map((honey, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 min-w-[200px] max-w-[250px] m-auto"
            >
              <img
                src={honey}
                className="w-full h-auto rounded-full object-cover"
                alt={`Honey${index + 1}`}
              />
              <h6 className="text-orange-400 text-center mt-2">
                CHEF MATT PRODUCTS
              </h6>
              <div className="text-white text-center mt-1 flex justify-center items-center">
                <p className="mr-4 line-through">$12.00</p>
                <p>$9.00</p>
              </div>
            </div>
          ))}
        </section>

        <section className="relative w-full h-[400px]">
          <img
            src={DryFruits}
            className="absolute inset-0 w-full h-full object-fill"
            alt="DryFruits"
          />
          <div className="absolute inset-0 flex flex-col text-center justify-center p-4 bg-transparent">
            <div className="mx-auto w-4/5 max-w-md bg-transparent">
              <h1 className="text-black text-3xl bg-transparent">ONLINE ONLY</h1>
              <hr className="border-t-2 w-1/6 border-gray-400 h-1 mx-auto" />
              <h2 className="text-black text-sm mt-4 bg-transparent">
                GET 20% OFF YOUR ORDER OF $50 OR MORE Use code{" "}
                <span className="font-bold bg-transparent">“Chef20”</span>
              </h2>
              <h3 className="text-black border-2 border-black p-4 w-80 m-auto mt-4 bg-transparent">
                Shop Now
              </h3>
            </div>
          </div>
        </section>
        
        {menuOpen && <ImageGrid />}

        <section className="relative w-full h-[400px]">
          <img
            src={Bacon}
            className="absolute inset-0 w-full h-full object-fill"
            alt="Bacon"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 bg-transparent">
            <div className="mx-auto w-4/5 max-w-md bg-transparent">
              <h1 className="text-white text-3xl bg-transparent">SIGN UP SPECIAL PROMOTIONS</h1>
              <hr className="border-t-2 bg-white border-gray-400 h-1 " />
              <p className="text-white text-sm mt-4 bg-transparent">
                Get exclusive deals you won’t find anywhere else straight to
                your inbox!
              </p>
              <div className="flex items-center mt-4 bg-transparent">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 py-2 border border-white text-white placeholder-white mr-2 bg-transparent"
                />
                <button className="px-4 py-2 bg-orange-400 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <InfoSection />

        <hr className="border-t-2 border-custom-color h-4 mx-auto my-4" />

        <footer className="flex justify-center items-center py-8">
          <img
            src={Signature}
            className="max-h-[150px] w-[95%] object-contain"
            alt="Signature"
          />
        </footer>
      </div>
    </>
  );
}

export default App;
