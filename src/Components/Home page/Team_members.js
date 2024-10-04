import React from 'react';
import teamimg from '../utils/japanese-kid-with-her-mother-city-park_1268509-4877-removebg-preview.png';

function Team_members() {
  return (
    <div className="p-6 md:p-16 lg:p-28">
      <div className="bg-gradient-to-r from-red-950 via-red-800 to-red-900 shadow-[0px_0px_10px_gray] h-auto md:h-[90vh] mt-8 mb-10 rounded-2xl p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <div className="md:w-6/12 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4 border-b-2 border-gray-200 pb-2">
              Retail Store Project
            </h2>
            <p className="text-gray-200 mb-6 text-base md:text-lg leading-relaxed">
              This project is an advanced online retail store platform built to
              provide a seamless shopping experience for customers. It is
              designed with a focus on user-friendly navigation and fast search
              functionality. The platform allows users to browse a wide range of
              products, add items to a shopping cart, and ensures reliability,
              performance, and scalability. It's perfect for small to medium-sized
              businesses looking to sell products online.
            </p>
            <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0 rounded-xl p-3 shadow-[0px_0px_10px_gray]">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
                  Tech Stack
                </h3>
                <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2 text-base">
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
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
                  Team Members
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-base">
                  <li>Rakesh</li>
                  <li>Punith</li>
                  <li>Jeevan</li>
                  <li>Prajwal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-auto flex justify-center">
            <img className="w-64  md:w-72 lg:w-96" src={teamimg} alt="Team members" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_members;
