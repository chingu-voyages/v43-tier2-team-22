import React, { useRef, useEffect } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';

export const MessageOutput = ({ msgList, user }) => {
  const messageOutputRef = useRef(null);

  const triggerScrollToBottom = () => {
    if (messageOutputRef.current) {
      messageOutputRef.current.scrollTop = messageOutputRef.current.scrollHeight
    }
  }

  useEffect(() => {
    triggerScrollToBottom();
  }, [msgList]);

  return (
    <>
      <div 
       ref={messageOutputRef}
        className='h-h-nav p-10 overflow-y-scroll'>
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
