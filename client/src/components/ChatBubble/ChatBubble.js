import React from "react";

const ChatBubble = ({ text }) => {
  return (
    <>
      <div
        className="bg-gray-200 flex items-center justify-start rounded-lg w-56 p-2"
        style={{ minHeight: "50px", hyphens: "auto" }}
      >
        {text}
      </div>
    </>
  );
};

export default ChatBubble;
