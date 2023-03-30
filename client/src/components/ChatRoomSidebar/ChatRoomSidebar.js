import ChatCard from "../ChatCard/ChatCard"
import { ImCross } from 'react-icons/im';
const ChatRoomSidebar = () => {

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

  const listItems = rooms.map(room => <ChatCard roomNum={room.id} activeUser={room.activeUser} key={room.id}/>)
  return(
    <aside className = "p-4 overflow-y-scroll bg-gray-200 w-fit">
      <button className="float-right">
      <ImCross className="hover:cursor-pointer hover:fill-slate-400"/>
      </button>
      <header className="text-xl text-center leading-loose">
        <h2>Rooms</h2>
      </header>
      <ul className="flex flex-col gap-4 list-none">
        {listItems}
      </ul>
    </aside>
  )
}

export default ChatRoomSidebar