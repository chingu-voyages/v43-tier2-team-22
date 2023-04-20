import React from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';

export const MessageOutput = ({ msgList, user, currentRoom }) => {
  return (
    <>
    <h1 className="flex justify-center text-gray-500">You are currently in Room {currentRoom}</h1>
      <div className='h-h-nav p-10 overflow-y-scroll'>
        <div className='flex flex-col'>
          {msgList.map((ml, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: user !== ml.name ? 'flex-end' : 'flex-start',
              }}
            >
              <div>
                <div>{ml.name}</div>
                <ChatBubble text={ml.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
