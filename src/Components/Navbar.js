import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      

<nav class="bg-gray-950 bg-opacity-85 backdrop-blur-md shadow-md w-full z-20 -mt-7  fixed">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={LOGO_URL} class="h-8" alt="Retail Store" />
      <span class="self-center text-white text-2xl font-semibold whitespace-nowrap ">Retail Store</span>
  </a>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
      <li>
        <Link to="/products" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Products</Link>
      </li>
      <li>
        <Link to="/carts" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Cart</Link>
      </li>
      <li>
        <Link to="/orders" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Orders</Link>
      </li>
      <li>
        <Link to="/login" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Login</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
