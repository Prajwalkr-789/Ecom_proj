import React, { useEffect, useState, useMemo } from 'react';
import mockdata from '../Mockdata/Mockdata.json';

function All_products({ id }) {
  const [product, setProduct] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = {
    '1': 'Laptops',
    '2': 'Mobiles',
    '3': 'Clothes',
    '4': 'Sneakers',
    '5': 'Bottles',
    '6': 'Headphones'
  };

  useEffect(() => {
    setProduct(categories[id] || '');
  }, [id]);

  const filteredProducts = useMemo(() => {
    return mockdata.products.filter(cat => 
      cat.category === product && 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [product, searchQuery]);

  return (
    <div className='w-2/12'>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-black border border-t-0 border-l-0 border-gray-500">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Laptops</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Mobiles</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Shirts</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Sneakers</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Bottles</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-800 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Headphones</span>
              </a>
            </li>
            
            {/* Add more categories as needed */}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default All_products;
