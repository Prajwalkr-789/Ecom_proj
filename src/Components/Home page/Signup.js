import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="flex items-center bg-black justify-center min-h-screen ">
    <div className="w-full max-w-md bg-black shadow-[0px_0px_8px_lightgray] rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Sign up</h2>
      <form>
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-400 mb-2"
          >
            Email ID
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border shadow-[0px_0px_10px_green] bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-400 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border shadow-[0px_0px_10px_green] border-gray-300 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-400 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            name="confirm-password"
            className="w-full px-4 py-2 border shadow-[0px_0px_10px_green] bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your password once again"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full px-4 py-2  bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Signup
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
      </div>
    </div>
  </div>
  )
}

export default Signup
