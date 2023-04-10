import React from "react";
import ChatBubble from "../ChatBubble/ChatBubble";

export const MessageOutput = ({ msgList, user }) => {
  // TODO: check if the user name is the same
  const isMyself = user;
  return (
    <>
      <div className="h-h-nav p-10 overflow-y-scroll">
        <div className="flex flex-col">
          {msgList.map((ml, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMyself ? "flex-end" : "flex-start",
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
