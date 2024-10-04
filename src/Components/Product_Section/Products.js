import React from "react";
import All_products from "./All_products";
import Left_sidebar from "../Sidebar/Left_sidebar";

function Product_showcase() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Left_sidebar/>
      <label className='text-white mr-2 ' htmlFor="">Search : </label>
      <input className='bg-gray-600 rounded-xl p-3 ' placeholder='' type="text" />
      <div>
        
        <div className="">
          <h2 className="text-white text-2xl">Laptops</h2>
          <All_products id="1" />
        </div>
        <div>
          <h2 className="text-white text-2xl">Mobioles</h2>
          <All_products id="2" />
        </div>
        <div>
          <h2 className="text-white text-2xl">Clothes</h2>
          <All_products id="3" />
        </div>
        <div>
          <h2 className="text-white text-2xl">Sneakers</h2>
          <All_products id="4" />
        </div>
        <div>
          <h2 className="text-white text-2xl">Bottles</h2>
          <All_products id="5" />
        </div>
        <div>
          <h2 className="text-white text-2xl">Headphones</h2>
          <All_products id="6" />
        </div>
      </div>
    </div>
  );
}

export default Product_showcase;
