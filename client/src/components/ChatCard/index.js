import React from "react";

const ChatCard = ({ roomNum, activeUser, handleJoin }) => {
  const exampleImage = ``;

  return (
    <>
      <div className="flex h-36 w-96 rounded-lg	overflow-hidden border-solid border-2 border-black">
        <div className="w-3/5 m-6 rounded-lg overflow-hidden">
          <img className="w-full h-full bg-gray-400	" src={exampleImage} />
        </div>
        <div className="flex flex-col justify-around w-2/5 mt-6 mr-6 mb-6">
          <div className="text-right	text-gray-800">Room {roomNum}</div>
          <div className="text-right	text-gray-800">
            {activeUser} active users
          </div>
          <div className="rounded-lg overflow-hidden h-9 bg-gray-400 hover:bg-gray-300">
            <button className="h-full w-full text-white" onClick={handleJoin}>
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
