import React, { useEffect, useState } from 'react';
import mockdata from '../Mockdata/Mockdata.json';
import { useParams, useNavigate } from 'react-router-dom';


function Shopping_cards() {
  const [product, setProduct] = useState();
  const [sortOption, setSortOption] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const categories = {
    '1': 'Laptops',
    '2': 'Mobiles',
    '3': 'Clothes',
    '4': 'Sneakers',
    '5': 'Bottles',
    '6': 'Headphones'
  };

  useEffect(() => {
    setProduct(categories[id]);
  }, [id]);

  const handleViewMore = (productDetails) => {
    navigate(`/product/details/${productDetails.id}`, {
      state: { product: productDetails }
    });
  };

  
  const sortProducts = (products) => {
    if (sortOption === 'priceLowToHigh') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighToLow') {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'reviewsLowToHigh') {
      return products.sort((a, b) => a.reviews - b.reviews);
    } else if (sortOption === 'reviewsHighToLow') {
      return products.sort((a, b) => b.reviews - a.reviews);
    }
    return products;
  };

  return (
    <div className='w-full bg-black p-6 md:p-12 lg:p-24'>
      <div className='text-right mb-3'>
        <button className='text-white mr-3'>Sort by : </button>  
        <select 
          className='bg-black border border-gray-600 rounded-xl outline-none text-white p-2' 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option className='bg-black hover:bg-gray-900' value="">Select</option>
          <option className='bg-black hover:bg-gray-900' value="priceLowToHigh">Price : low to high</option>
          <option className='bg-black hover:bg-gray-900' value="priceHighToLow">Price : high to low</option>
          <option className='bg-black hover:bg-gray-900' value="reviewsLowToHigh">Reviews : low to high</option>
          <option className='bg-black hover:bg-gray-900' value="reviewsHighToLow">Reviews : high to low</option>
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12'>
        {sortProducts(
          mockdata.products.filter((cat) => cat.category === product)
        ).map((res) => (
          <div
            key={res.id}
            className='bg-black border border-gray-700 rounded-3xl bg-gradient-to-bl from-gray-950 via-gray-800 to-900 transition-transform duration-500 hover:scale-105'
          >
            <div className="relative group flex flex-col overflow-hidden rounded-lg hover:shadow-lg">
              <h2 className='text-white text-sm bg-gray-500 w-fit rounded-xl text-left ml-2 py-1 -mb-5 px-2 mt-1'>{res.discount}% Off</h2>
              <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <div className='p-5 flex mx-auto'>
                  <img
                    className="h-full transition-transform duration-500 group-hover:scale-95 w-full rounded-xl"
                    src={res.image_url}
                    alt="product"
                  />
                </div>
              </a>
              <div className='text-white font-bold'>

                    <h5 className="text-xl tracking-tight text-white text-center">{res.name}</h5>
              </div>
              <div className="mt-4 flex  justify-around px-5 pb-5">
                <div className="flex flex-col text-left">
                  <a href="#">
                    <span className="text-xl font-bold text-white">Rs {res.price}/-</span>
                  </a>
                </div>
               
                <div className="flex items-center ml-3">
                  {Array.from({ length: res.reviews }).map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="mr-2 ml-3 text-white rounded bg-green-500 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
              </div>
              
              <div className='text-white flex flex-row justify-around'>
                  <h2>Company : {res.company_name}</h2>
                  <h2>InStock: {res.stock}</h2>
                </div>
              <div className='p-5'>
                <button
                  onClick={() => handleViewMore(res)}
                  className="flex items-center justify-center rounded-md bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  View more
                </button>
                <div>

                  <h2 className='text-white text-right'>{res.category}</h2>
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping_cards;
