import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black  shadow-[0px_0px_10px_lightgray] rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-md font-semibold text-white mb-2"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-600 shadow-[0px_0px_7px_gray] rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-md font-semibold text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-600 shadow-[0px_0px_7px_gray] rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-sm text-white">
           
            <Link to="/admin-auth" className="text-blue-400 hover:underline">
              Admin Login
            </Link>
          </p>
          <p className="text-sm text-white">
            
            <Link to="/seller-auth" className="text-blue-400 hover:underline">
              Seller Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
