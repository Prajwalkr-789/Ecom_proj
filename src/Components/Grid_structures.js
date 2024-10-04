import React from "react";

function Grid_structures() {
  return (
    <div className="bg-black">
    <div className="bg-cover  flex justify-center items-center bg-center h-screen" style={{ backgroundImage: 'url("https://your-background-image-url.com")' }}>
      <div className="grid  h-screen grid-cols-6 grid-rows-5 gap-4 p-4">
        {/* Red Block */}
        <div className="col-span-3 row-span-4 bg-gradient-to-r from-red-700 to-red-800 bg-opacity-75 p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold text-white mb-2">Red Block Title</h2>
          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa odio eum doloribus quisquam...</p>
        </div>

        {/* Green Block */}
        <div className="col-span-3 row-span-2 col-start-4 bg-gradient-to-r from-green-700 to-green-800 bg-opacity-75 p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold text-white mb-2">Green Block Title</h2>
          <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt maiores numquam possimus...</p>
        </div>

        {/* Blue Block */}
        <div className="col-span-3 row-span-2 col-start-4 row-start-3 bg-gradient-to-r from-blue-700 to-blue-800 bg-opacity-75 p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold text-white mb-2">Blue Block Title</h2>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia minima quam aliquid...</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Grid_structures;
