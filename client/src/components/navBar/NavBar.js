import React, { useState } from 'react';
import { ImExit, ImDelicious } from 'react-icons/im';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useAuth } from '../../utils/authProvider';
import { useNavigate } from 'react-router-dom';

const NavBar = ({openRooms}) => {
  const [isToggled, setIsToggled] = useState(false);
 
  let auth = useAuth();
  let navigate = useNavigate();

  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  function handleLogout(event) {
    event.preventDefault();
    auth.signout(() => {
      navigate('/login', { replace: true });
    });
  }

  return (
    <nav className='bg-gray-200 w-screen'>
      <div className='container mx-auto py-4 flex justify-around items-center '>
        <div className='flex justify-center items-center gap-3'>
          <button
            onClick={openRooms}
            className='flex justify-center items-center transition-colors duration-200 transform rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
          >
            <ImDelicious />
          </button>
          <button onClick={toggle}>
            {isToggled ? <BsToggleOn /> : <BsToggleOff />}
          </button>
        </div>

        <div className='flex space-x-10 justify-center'>
          <h1 className='text-4xl font-extrabold'>TechChat</h1>
        </div>

        <button className='p-1 flex justify-center items-center transition-colors duration-200 transform rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300'>
          <h1 className='text-l font-bold' onClick={handleLogout}>
            Exit Chat
          </h1>
          <ImExit className='ml-2' />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
