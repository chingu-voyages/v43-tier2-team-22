import React, { useState } from "react";
import { ImMail } from "react-icons/im";

export const MessageInputDisplay = ({
  setInputMsg,
  inputMsg,
  fullView,
  handleSubmit,
}) => {
  return (
    <div
      className="flex flex-row space-y-4 p-3  
    scrollbar-thumb-blue scrollbar-thumb-rounded 
    scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch bg-gray-200"
    >
      <input
        type="text"
        placeholder="Type your message here..."
        className="border border-gray-400 p-2 rounded-md w-full mr-2 text-black"
        onChange={(event) => setInputMsg(event.target.value)}
      />
      <button
        className="!m-0 justify-center items-center flex"
        onClick={handleSubmit}
      >
        <ImMail size={40} />
      </button>
    </div>
  );
};
