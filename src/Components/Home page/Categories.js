// src/components/Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// src/data/categoriesData.json
const categoriesData = [
    {
      "id": 1,
      "name": "LAPTOPS",
      "description": "Powerful laptops for every professional need.",
      "offer": "Upto 80% off!",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.UxBLBIN0OfLXjMFTbeX_hwHaF1&pid=Api&P=0&h=180",
      "link": "products/1"
    },
    {
      "id": 2,
      "name": "MOBILES",
      "description": "Latest mobiles for ultimate connectivity",
      "offer": "Upto 80% off!",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbUc01MNR0OzSGKCe0T71B9MumIn0g2awmv0MQ0zOQEfeSpFzExNUZzRYfdYb3L3eC8n8_9O1nkfC2uyjDiRb_YDZabVFP4rIe01bLSqlnIu1gA7Q89yNSsZY",
      "link": "products/2"
    },
    {
      "id": 3,
      "name": "SHIRTS",
      "description": "Stylish outfits for every occasion.",
      "offer": "Upto 80% off!",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBydSc4KN3K91pI7XEyk38rI5sei5-NN0JeA&s",
      "link": "products/3"
    },
    {
      "id": 4,
      "name": "Sneakers",
      "description": "Step up your game with sneakers.",
      "offer": "Upto 80% off!",
      "imageUrl": "https://img.freepik.com/premium-photo/running-shoes-realistic-4k-white-background_839182-6781.jpg",
      "link": "products/4"
    },
    {
      "id": 5,
      "name": "BOTTLES",
      "description": "Lorem ipsum dolor sit amet.",
      "offer": "Upto 80% off!",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfMlkozx1UoW4h9ubnJ83ft5X3oVyYf0dsA&s",
      "link": "products/5"
    },
    {
      "id": 6,
      "name": "HEADPHONES",
      "description": "Lorem ipsum dolor sit amet.",
      "offer": "Upto 80% off!",
      "imageUrl": "https://www.thesonyshop.ca/cdn/shop/products/WH1000XM5L_1_3000x3000.jpg?v=1680535042",
      "link": "products/6"
    }
  ]
  

function Categories() {
  return (
    <div className='py-10 bg-black'>
      <h2 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500 font-extrabold mt-10 text-center">
        CATEGORIES
      </h2>
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        {/* Grid layout for categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {categoriesData.map((category) => (
            <div key={category.id} className="h-80 p-2 transition-transform duration-300 hover:cursor-pointer hover:scale-105">
              <div className="flex flex-row rounded-xl p-5 bg-gradient-to-r from-gray-950 via-gray-800 to-black h-full justify-center items-center">
                <img
                  className="w-2/6 h-auto rounded-2xl mb-5"
                  src={category.imageUrl}
                  alt={category.name}
                />
                <div className="text-center ml-5">
                  <h2 className="text-xl text-white font-bold mb-2">{category.name}</h2>
                  <p className="text-md text-white font-semibold mb-2">{category.description}</p>
                  <p className="text-lg font-bold text-blue-500 mb-4">{category.offer}</p>
                  <Link to={category.link}>
                    <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold p-3 rounded-xl">
                      Check out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
