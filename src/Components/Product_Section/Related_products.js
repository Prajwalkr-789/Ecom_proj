import React from 'react'
import sliding from '../Mockdata/Mockdata.json'

function Related_products() {
  return (
    <div className="w-full bg-black">
      <h2 className='text-left text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-600 ml-10 font-bold text-3xl'>Related products</h2>
      <div className="overflow-x-auto flex space-x-4 p-10">

        {sliding.products
          .filter((cat) => cat.category === 'Mobiles')
          .map((res) => (
            <div className='min-w-[600px]  bg-black shadow-[0px_0px_10px_lightgray] rounded-xl'>
            <div key={res.id} className=" rounded-lg p-4 flex justify-around items-center">
              <div className="flex-shrink-0">
                <img className="w-40 h-40 object-contain" src={res.image_url} alt={res.name} />
              </div>
              <div className="ml-4 leading-relaxed">
                <h3 className="text-lg text-gray-200 font-bold">{res.name}</h3>
                <p className="text-white text-xl font-bold mt-2 ">Price: Rs.{res.price}</p>
               
                <div className='flex gap-5 mt-2'>
                  <p className="font-bold text-green-500"> {res.discount}% Off</p>
                <p className="text-gray-300"> {res.category}</p>

                </div>
                <p className="text-gray-200 text-right mt-1">Stock: {res.stock}</p>
                
               
                {/* <p className="text-gray-500">Category: {res.category}</p> */}
              </div>
            </div>
              <hr className=' bg-gray-400' />
              <div className='flex px-10 justify-between py-2'>

                <p className="text-gray-200 text-right">
                  {res.reviews} ⭐({res.total_reviews})
                </p>
                <p className="text-gray-200 text-right">{res.company_name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Related_products
