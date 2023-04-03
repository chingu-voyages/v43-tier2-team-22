import React, { useState } from "react";
import { ImMail } from "react-icons/im";

export const MessageInputDisplay = () => {
  const [inputMsg, setInputMsg] = useState("");

  const handleSubmit = (event) => {
    console.log("msg: ", inputMsg);
  };

  return (
    <div
      className="flex flex-row space-y-4 p-3 overflow-y-auto 
    scrollbar-thumb-blue scrollbar-thumb-rounded 
    scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <input
        type="text"
        placeholder="Type your message here..."
        className="border border-gray-400 p-2 rounded-md w-11/12"
        onChange={(event) => setInputMsg(event.target.value)}
      />
      <button
        className="w-1/12 !m-0 justify-center items-center flex"
        onClick={handleSubmit}
      >
        <ImMail size={40} />
      </button>
    </div>
  );
};
