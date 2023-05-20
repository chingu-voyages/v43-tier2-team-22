import React, {useEffect, useState} from 'react'
import { ImUser, ImAddressBook } from "react-icons/im";



const UserList = ({user}) => {
console.log(user)
const listUsers = user.map((name) => (

  <li className="dark:bg-slate-700 bg-gray-300 p-1 cursor-crosshair rounded float-left m-1" id={name.id} key={name.id}><ImUser />{name.user}</li>
));

  return (
    <aside className="flex flex-col justify-between p-4 overflow-y-scroll bg-gray-200 top-16 dark:bg-slate-800 w-1/4 min-w-fit">
      <div>
      <header className="text-xl font-semibold m-2">
      <h1><ImAddressBook className="float-left m-1"/>Active Users</h1>
      </header>
      <ul className="flex flex-col gap-3 mt-3 w-full">
        {listUsers}
      </ul>
      </div>
      <footer className="text-xs text-center">
        <p>Made with 💜 by Team22</p>
        <p>View on <a href="https://github.com/chingu-voyages/v43-tier2-team-22">Github</a></p>
      </footer>
    </aside>
  )

}

export default UserList;