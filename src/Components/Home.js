import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Team_members from "./Team_members";
import Offer from "./Offer";
import right from '../utils/illustration-online-marketplaces-interactive-product-catalogs-with-detailed-views-d-model_995578-30881-removebg-preview.png'

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
     
      <div className="flex h-screen flex-row items-center w-full ">
        <div className="flex flex-row w-full  ">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col justify-center pr-8">
            <h2 className="text-5xl font-bold text-gray-200 mb-4">
              E- <span className="font-extrabold text-red-600">C</span>ommerce
            </h2>
            <h3 className="text-3xl font-thin text-gray-300 mb-6">
              Your One-Stop Shop for Everything You Need.
            </h3>
            <h4 className="text-2xl font-semibold  text-gray-200 mb-2">
              Explore Top Categories:
            </h4>
            <h5 className="text-xl text-gray-300 mb-4 font-extralight">
              Electronics, Fashion, Home Essentials, and More!
            </h5>
          </div>

          {/* Right Section */}
          <div className="w-1/2 ml-2  ">
            {/* <img
              className="w-full h-96 object-cover  transition-transform duration-500 ease-in-out transform hover:translate-x-4"
              src={images[scrol]}
              alt="Colorful clothes"
            /> */}
            <div>

            {/* <img className="w-8/12  rounded-2xl" src="https://img.freepik.com/premium-photo/illustration-online-marketplaces-interactive-product-catalogs-with-detailed-views-d-model_995578-30881.jpg?ga=GA1.1.442708528.1726944434&semt=ais_hybrid" alt="" /> */}
            <img className="w-8/12  rounded-2xl" src={right} alt="" />
            </div>
          </div>
        </div>
      </div>

      

      <h2 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500 font-extrabold mt-10">CATEGORIES</h2>
      <div>
        <div className="min-w-h-screen  w-8/12 mx-auto">
          <div className="flex flex-row flex-wrap justify-center  items-center">
            <div className="w-6/12   h-80 p-2 gap-5 transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03]">
              <div className="flex rounded-xl bg-black shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray] flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      // style={{ clipPath: "inset(0 0 25% 0)" }}
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://tse2.mm.bing.net/th?id=OIP.UxBLBIN0OfLXjMFTbeX_hwHaF1&pid=Api&P=0&h=180"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">LAPTOPS</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                      Powerful laptops for every professional need.
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/1">
                      {" "}
                      <button className="bg-green-500 text-white font-bold p-3 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12   h-80 p-2">
              <h2 className="text-2xl font-serif mb-1 font-bold "></h2>
              <div className=" shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray]  transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03]  rounded-xl flex flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbUc01MNR0OzSGKCe0T71B9MumIn0g2awmv0MQ0zOQEfeSpFzExNUZzRYfdYb3L3eC8n8_9O1nkfC2uyjDiRb_YDZabVFP4rIe01bLSqlnIu1gA7Q89yNSsZY"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">MOBILES</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                      Latest mobiles for ultimate connectivity
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/2">
                      {" "}
                      <button className="bg-green-400 text-black font-bold p-3 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-6/12  h-80 p-2 ">
              <h2 className="text-2xl font-serif font-bold mb-1"></h2>
              <div className=" flex bg-black shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray] transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03]  rounded-xl flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBydSc4KN3K91pI7XEyk38rI5sei5-NN0JeA&s"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">SHIRTS</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                      Stylish outfits for every occasion.
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/3">
                      {" "}
                      <button className="bg-green-500 text-white font-bold p-3 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12  h-80 p-2">
              <h2 className="text-2xl font-serif font-bold  mb-1"></h2>
              <div className="flex bg-black shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray] transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03] rounded-xl flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://img.freepik.com/premium-photo/running-shoes-realistic-4k-white-background_839182-6781.jpg"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">Sneakers</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                      Step up your game with sneakers.
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/4">
                      {" "}
                      <button className="bg-green-500 text-white font-bold p-4 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12   h-80 p-2">
              <h2 className="text-2xl font-serif mb-1 font-bold "></h2>
              <div className="bg-black shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray] transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03]  rounded-xl flex flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfMlkozx1UoW4h9ubnJ83ft5X3oVyYf0dsA&s"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">BOTTLES</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                     Lorem ipsum dolor sit amet.
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/5">
                      {" "}
                      <button className="bg-green-500 text-white font-bold p-4 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12   h-80 p-2">
              <h2 className="text-2xl font-serif mb-1 font-bold "></h2>
              <div className="bg-black shadow-[0px_0px_5px_darkgray]  hover:shadow-[0px_0px_10px_darkgray] transition-transform duration-300 hover:cursor-pointer hover:scale-[1.03]  rounded-xl flex flex-row flex-wrap justify-center items-center gap-5 p-1 w-full h-full">
                <div className="flex flex-row justify-around -mt-6 items-center w-full p-10">
                  <div className="w-1/2">
                    <img
                      className="w-5/6 h-auto rounded-2xl"
                      src="https://www.thesonyshop.ca/cdn/shop/products/WH1000XM5L_1_3000x3000.jpg?v=1680535042"
                      alt="Acer Predator Helios 300"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center ">
                    <h2 className="text-xl text-white font-bold mb-4">HEADPHONES</h2>
                    <h2 className="text-md text-white font-semibold mb-4">
                     Lorem ipsum dolor sit amet.
                    </h2>
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                      Upto 80% off!
                    </h2>
                    <Link to="products/6">
                      {" "}
                      <button className="bg-green-500 text-white font-bold p-4 rounded-xl mt-4">
                        Check out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offer/>
      {/* <Cards /> */}
      <Team_members className=""/>
      <Footer />
    </div>
  );
}

export default Home;
