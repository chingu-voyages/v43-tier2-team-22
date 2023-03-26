import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen overflow-hidden'>
      <div>
        <h1 className=' m-6 flex justify-center items-center text-4xl font-bold text-center'>TechChat</h1>
        <div className='w-1/4 p-6 m-auto rounded-3xl shadow-md lg:max-w-xl bg-gray-200'>
          <h1 className='text-3xl font-semibold text-center text-purple-700'>
            Login
          </h1>
          <form className='mt-6'>
            <div className='mb-2 flex justify-center'>
              <input 
                placeholder='Type Nickname'
                type='text'
                className='block w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-2xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 text-center'
              />
            </div>

            <div className='mt-6 flex justify-center'>
              <button className='w-1/3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
