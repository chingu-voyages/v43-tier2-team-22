import ChatCard from "../ChatCard/ChatCard"
import { ImCross } from 'react-icons/im';
import { useEffect, useRef, useState } from 'react';

const ChatRoomSidebar = ({OpenRooms, isOpenRooms}) => {

  const [navbarHeight, setNavbarHeight] = useState(0);
  const sidebarRef = useRef(null);

  const rooms = [
    { id: 1, activeUser: 10 },
    { id: 2, activeUser: 20 },
    { id: 3, activeUser: 30 },
    { id: 4, activeUser: 40 },
    { id: 5, activeUser: 50 },
    { id: 6, activeUser: 60 },
    { id: 7, activeUser: 70 },
    { id: 8, activeUser: 80 },
    { id: 9, activeUser: 90 },
    { id: 10, activeUser: 100 },
  ]
  
  useEffect(() => {
    setNavbarHeight(document.querySelector('nav').clientHeight);
  }, []);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.maxHeight = `calc(100vh - ${navbarHeight}px - 122px)`;
    }
  }, [navbarHeight]);

  const listItems = rooms.map(room => <ChatCard roomNum={room.id} activeUser={room.activeUser} key={room.id}/>)
  return(
    <aside  ref={sidebarRef} className={`max-h-screen p-4 overflow-y-scroll bg-gray-200 w-fit ${isOpenRooms ? 'translate-y-0' : '-translate-x-full'}  ease-in-out duration-500 top-16 dark:bg-slate-600`}>
      <button className="float-right" onClick={OpenRooms}>
      <ImCross className="hover:cursor-pointer hover:fill-slate-400"/>
      </button>
      <header className="text-xl text-center leading-loose">
        <h2>Rooms</h2>
      </header>
      <ul className="flex flex-col gap-4 list-none max-h-full">
        {listItems}
      </ul>
    </aside>
  )
}

export default ChatRoomSidebar