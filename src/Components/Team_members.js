import React from 'react'
import teamimg from '../utils/japanese-kid-with-her-mother-city-park_1268509-4877-removebg-preview.png'

function Team_members() {
  return (
    <div className=' p-28'>
         <div className="bg-black shadow-[0px_0px_10px_gray] h-[90vh] mt-8 mb-10 rounded-2xl p-8 ">
  <div className="flex flex-row justify-around items-center">
    <div className="w-6/12">
      <h2 className="text-3xl font-bold text-gray-300 mb-4 border-b-2 border-gray-200 pb-2">
        Retail Store Project
      </h2>
      <p className="text-gray-200 mb-6 text-lg leading-relaxed">
        This project is an advanced online retail store platform built to
        provide a seamless shopping experience for customers. It is
        designed with a focus on user-friendly navigation, fast search
        functionality. The platform allows users to browse a wide range of
        products, add items to a shopping cart. The system ensures
        reliability, performance, and scalability, making it suitable for
        small to medium-sized businesses looking to sell products online.
      </p>
      <div className="flex flex-row justify-around rounded-xl p-3 shadow-[0px_0px_10px_gray]">
        <div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
            <li>
              <strong>Frontend:</strong> React
            </li>
            <li>
              <strong>Backend:</strong> Java
            </li>
            <li>
              <strong>Database:</strong> SQL with HATEOAS
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Team Members
          </h3>
          <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
            <li>Rakesh</li>
            <li>Punith</li>
            <li>Jeevan</li>
            <li>Prajwal</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      {/* <img
        className="w-64"
        src="https://img.freepik.com/premium-photo/dynamic-3d-cartoon-team-energetic_1035036-16515.jpg?ga=GA1.1.442708528.1726944434&semt=ais_hybrid"
        alt=""
      /> */}
      <img className='w-96' src={teamimg} alt="" />
      {/* <img className="w-64" src="https://img.freepik.com/premium-photo/japanese-kid-with-her-mother-city-park_1268509-4877.jpg?w=740" alt="" /> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Team_members
