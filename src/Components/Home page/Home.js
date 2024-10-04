import React, { useEffect, useState } from "react";
import Footer from "../Home page/Footer";
import { Link } from "react-router-dom";
import Cards from "../Home page/Cards";
import Team_members from "./Team_members";
import Offer from "../Home page/Offer";
import right from '../utils/illustration-online-marketplaces-interactive-product-catalogs-with-detailed-views-d-model_995578-30881-removebg-preview.png'
import Sliders from "../Home page/Sliders";
import Categories from "./Categories";

function Home() {
  const [scrol, setscrol] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1625550105110-64e5390f4636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1457301547464-91995555cd25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1625550105110-64e5390f4636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1625550105110-64e5390f4636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1457301547464-91995555cd25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1507945146573-b204a9bf954f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlcyUyMHdpdGglMjBsb25nJTIwd2lkdGglMjBvZiUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1457301547464-91995555cd25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzJTIwd2l0aCUyMGxvbmclMjB3aWR0aCUyMG9mJTIwc2hpcnRzfGVufDB8fDB8fHww",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setscrol((prevScrol) => (prevScrol + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-black">
     
      <div className="h-screen  items-center w-full ">
        
        <div className="text-white mt-24 text-center ">
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-500 to-gray-900 ">RETAIL STORE</h2>
          <p className="text-2xl w-6/12 mx-auto font-medium text-gray-500 mt-2">Your one-stop shop for everything you love online.</p>
            <div className="flex flex-row mt-5 justify-center items-center">
            <button className="bg-black border border-gray-500 hover:shadow-[0px_0px_10px_gray]  p-3 rounded-xl font-bold">Go Shopping</button>
          </div>
        </div>
        <div className=" ">
        <Sliders/>
        </div>
      </div>

      
      <Categories/>
      {/* <Sliders/> */}
      <Offer/>
      {/* <Cards /> */}
      <Team_members className=""/>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
