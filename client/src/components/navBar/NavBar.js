import React, { useState, useEffect } from 'react';
import { ImExit, ImDelicious } from 'react-icons/im';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useAuth } from '../../utils/authProvider';
import { useNavigate } from 'react-router-dom';

const NavBar = ({openRooms}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
 
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
    <nav className='bg-gray-200 w-screen dark:bg-slate-800'>
      <div className='container mx-auto py-4 flex justify-around items-center '>
        <div className='flex justify-center items-center gap-3'>
          <button
            onClick={openRooms}
            className='flex justify-center items-center transition-colors duration-200 transform rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
          >
            <ImDelicious />
          </button>
          <button onClick={()=>{toggle(); handleThemeSwitch()}}>
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
