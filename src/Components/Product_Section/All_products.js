import React from 'react'
import mockdata from '../Mockdata/Mockdata.json';
import { useEffect , useState} from 'react';

function All_products({id}) {

    const [product, setproduct] = useState(0);

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
    <div className="flex">
    {/* <Left_sidebar /> */}
    <div className='w-11/12'>
      <div className='w-full bg-black p-5 mx-4 lg:p-24 lg:mx-44'>
        {/* <label className='text-white mr-2' htmlFor="">Search : </label>
        <input className='bg-gray-600 rounded-xl p-3' placeholder='' type="text" /> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-1 lg:p-10'>
          {mockdata.products
            .filter((cat) => cat.category === product)
            .map((res) => (
              <div key={res.id} className='bg-black border border-stone-900 transition-transform duration-500 hover:scale-105'>
                <div className="relative group flex flex-col overflow-hidden rounded-lg shadow-[0px_0px_5px_gray] hover:shadow-[0px_0px_10px_2px_gray]">
                  <h2 className='text-white text-sm bg-gray-500 w-fit rounded-xl text-left ml-2 py-1 -mb-5 px-2 mt-1'>{res.discount}%Off</h2>
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <div className='p-5 flex mx-auto'>
                      <img
                        className="h-full w-full transition-transform duration-500 group-hover:scale-95 rounded-xl"
                        src={res.image_url}
                        alt="product"
                      />
                    </div>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl tracking-tight text-white">{res.name}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-white">Rs {res.price}/-</span>
                      </p>
                      <div className="flex items-center">
                        {Array.from({ length: res.reviews }).map((_, index) => (
                          <span>⭐</span>
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
    </div>
  </div>
  )
}

export default All_products
