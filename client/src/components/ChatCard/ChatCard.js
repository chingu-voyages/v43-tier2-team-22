import React from "react";

const ChatCard = ({ exampleImage, roomNum, activeUser, handleJoinRoom, setCurrentRoom }) => {
  // TODO: remove below style later
  const tempStyle = {
    minHeight: "100px",
  };

  return (
    <>
      <div className="flex h-full rounded-lg	overflow-hidden border-solid border-2 border-black">
        <div className="w-3/5 h-full m-6 rounded-lg overflow-hidden">
          <img
            className="w-full h-full bg-gray-400 w-40"
            src={exampleImage}
            style={tempStyle}
          />
        </div>
        <div className="flex flex-col justify-around w-2/5 mt-6 mr-6 mb-6">
          <div className="text-right	text-gray-800 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-600 cursor-pointer" >Room {roomNum}</div>
          <div className="text-right	text-gray-500 dark:text-slate-400 text-sm">
            {activeUser} active
          </div>
          <div className="rounded-lg overflow-hidden h-9 bg-gray-400 hover:bg-gray-300">
            <button className="h-full w-full tracking-wide text-white transition-colors duration-200 transform bg-purple-700 dark:bg-purple-600 rounded-md hover:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none focus:bg-purple-600" onClick={() => {
              setCurrentRoom(roomNum)
              handleJoinRoom(roomNum)
            }}>
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
