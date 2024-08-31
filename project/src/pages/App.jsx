import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="bg-cyan-500 p-8 rounded-lg shadow-lg">
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-center text-xl font-semibold text-cyan-600 mb-6">
            Login To Your Account
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;