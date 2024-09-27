import React, { useEffect, useState } from 'react';
import mockdata from '../Mockdata/Mockdata.json';
import { useParams } from 'react-router-dom';

function Shopping_cards() {
  const [product, setproduct] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setproduct(catog[id]);
  }, [id]);

  const catog = {
    '1': 'Laptops',
    '2': 'Mobiles',
    '3': 'Clothes',
    '4': 'Sneakers',
    '5':'Bottles',
    '6':'Headphones'
  };

  return (
    <div className='w-full bg-black p-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-10'>
        {mockdata.products
          .filter((cat) => cat.category === product)
          .map((res) => (
            <div key={res.id} className='bg-black'>
              <div className="relative flex flex-col overflow-hidden rounded-lg shadow-[0px_0px_5px_gray] hover:shadow-[0px_0px_10px_2px_gray]">
                <h2 className='text-white text-sm bg-gray-500 w-fit rounded-xl text-left ml-2 py-1 -mb-5 px-2 mt-1'>{res.discount}%Off</h2>
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <div className='p-5 flex mx-auto '>
                  <img 
                      className="h-full w-full rounded-xl" 
                      src={res.image_url} 
                      alt="product" 
                    />
                  </div>
                  
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {res.discount}% OFF
                  </span> */}
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-white">{res.name}</h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-xl font-bold text-white">Rs {res.price}/-</span>
                      {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                    </p>
                    <div className="flex items-center">
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
                  <a
                    href="#"
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
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shopping_cards;
