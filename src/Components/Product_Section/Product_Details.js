import React from 'react';
import { useLocation } from 'react-router-dom';
import Related_products from './Related_products'; 
import Footer from '../Home page/Footer';
import { addItem } from '../Cart/Cartslice';


function Product_Details() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div className="text-white">Product not found</div>;
  }

  return (
    <div className='bg-black text-white mt-10'>
      <section className="py-8 bg-black md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full h-auto rounded-lg" src={product.image_url} alt={product.name} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold sm:text-2xl">{product.name}</h1>

              <div className="mt-4 flex-col text-left sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold">Rs {product.price}/-</p>
                <span className='text-yellow-400'>{'⭐'.repeat(product.reviews)} ({product.reviews})</span>
              </div>
              <div>
                <p className="text-lg"><span className="font-semibold text-orange-400">{product.discount}% Off!</span></p>

              </div>
              <div className="mt-4">
                <p className="text-lg">Company: <span className="font-semibold">{product.company_name}</span></p>
                <p className="text-lg">Category: <span className="font-semibold">{product.category}</span></p>
                <p className="text-lg">Stock: <span className="font-semibold">{product.stock} available</span></p>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button 
                  type="button" 
                  className="text-white font-semibold text-md bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-lg px-10 py-2.5 me-2">
                  Buy Now
                </button>

                <a 
                  href="#"
                  title=""
                  className="text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 21v-2a4 4 0 00-8 0v2M6 11V5a2 2 0 012-2h12a2 2 0 012 2v6M10 11h4"
                    />
                  </svg>
                  Add to Cart
                </a>
              </div>
              <hr className='mt-2'/>
              <div>
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Related_products productId={product.category} /> {/* Pass the product ID to Related Products */}
      
    </div>
  );
}

export default Product_Details;
