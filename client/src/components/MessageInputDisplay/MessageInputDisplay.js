import React from 'react';

export const MessageInputDisplay = () => {
  return (
    <div className='flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
      <input
        type='text'
        placeholder='Type your message here...'
        className='border border-gray-400 p-2 rounded-md'
      />
      <button className=' bg-blue-500 text-white rounded-md px-4 py-2'>
        Send
      </button>
    </div>
  );
};
