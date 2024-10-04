import React from 'react'
import { LOGO_URL } from '../utils/constants'
function Footer() {
  return (
    <div className='mt-42'>
      
<hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
<footer class="bg-black rounded-lg shadow  m-4">
    <div class="w-full  mx-auto p-10 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href= "/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={LOGO_URL} class="h-8" alt="Retail store" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Retail Store</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm  sm:text-center text-gray-400">© 2024 <a href="/" class="hover:underline">Retail Store™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer
