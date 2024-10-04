import React, { useState, useEffect } from "react";
import sneaker from "../utils/running-shoes-realistic-4k-white-background_839182-6783-removebg-preview.png";
import sliding from "../Mockdata/Sliding_data.json";

function Cards() {
  const [ind, setind] = useState(1);

  useEffect(() => {
    const inter = setInterval(() => {
      setind((prevInd) => (prevInd + 1) % sliding.length);
    }, 3000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  console.log(sliding[1]);

  return (
    <div className="h-full mt-14 p-24">
      <div className="bg-black border border-green-500 w-full h-[55vh] rounded-2xl flex flex-col justify-center items-center p-5 mb-10">
        {/* First Card */}
        <div className="flex flex-row justify-center items-center w-full">
          <div className="w-5/12">
            <img
              className="w-8/12 rounded-xl"
              src={sliding[1].image_url}
              alt=""
            />
          </div>
          <div className="w-5/12 ml-5">
            <h2 className="mt-10 text-gray-300 text-xl font-mono">
              {sliding[1].name}
            </h2>
            <h2 className="text-white text-2xl font-bold">
              {sliding[1].aname}
            </h2>
            <p className="text-white text-md font-mono mt-5">
              {sliding[1].description}
            </p>
            <div className="flex flex-row items-center justify-between mt-5">
              <h3 className="text-green-700 text-2xl font-bold">
                Price: ₹{sliding[1].price}
              </h3>
              <h3 className="text-white text-md font-semibold">
                Ratings: {sliding[1].ratings.stars} (
                {sliding[1].ratings.reviews_count})
              </h3>
            </div>
            <button className="bg-white text-black font-bold text-md p-2 rounded-xl mt-5 hover:cursor-pointer">
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Second Card (Duplicate) */}
      <div className="bg-black border border-green-500 w-full h-[55vh] rounded-2xl flex flex-col justify-center items-center p-5">
        <div className="flex flex-row justify-center items-center w-full">
          <div className="w-5/12">
            <img
              className="w-8/12 rounded-xl"
              src={sliding[2].image_url}
              alt=""
            />
          </div>
          <div className="w-5/12 ml-5">
            <h2 className="mt-10 text-gray-300 text-xl font-mono">
              {sliding[2].name}
            </h2>
            <h2 className="text-white text-2xl font-bold">
              {sliding[2].aname}
            </h2>
            <p className="text-white text-md font-mono mt-5">
              {sliding[2].description}
            </p>
            <div className="flex flex-row items-center justify-between mt-5">
              <h3 className="text-green-700 text-2xl font-bold">
                Price: ₹{sliding[2].price}
              </h3>
              <h3 className="text-white text-md font-semibold">
                Ratings: {sliding[2].ratings.stars} (
                {sliding[2].ratings.reviews_count})
              </h3>
            </div>
            <button className="bg-white text-black font-bold text-md p-2 rounded-xl mt-5 hover:cursor-pointer">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
