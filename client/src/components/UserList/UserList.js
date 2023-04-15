const UserList = ({user}) => {

const users = [
  {id: 1, username: 'name'},
  {id: 2, username: 'name'},
  {id: 3, username: 'name'},
  {id: 4, username: 'name'},
  {id: 5, username: 'name'}
]

const listUsers = users.map((user) => (
  <li id={user.id} username={user.username} key={user.id} >user</li>
));

  return (
    <aside className="flex flex-col justify-between p-4 overflow-y-scroll bg-gray-200 top-16 dark:bg-slate-800 w-1/4 min-w-fit">
      <div>
      <header className="text-xl font-semibold">
      <h1>Active Users</h1>
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