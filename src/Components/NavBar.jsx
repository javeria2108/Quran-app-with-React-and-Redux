import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay, faGlobe, faHome, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebaseConfig";
import { signOut, onAuthStateChanged } from 'firebase/auth';

const NavBar = ({ onBarsClick }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handlePlayClick = () => {
    navigate('/player/1');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGlobeClick = () => {
    navigate('/languages');
  };

  const handleSignInClick = () => {
    navigate('/Auth');
  };

  const handleUserClick = () => {
    setDropdown(!dropdown);
  };

  const handleSignOutClick = () => {
    signOut(auth).then(() => {
      setDropdown(false);
      navigate('/Auth');
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleFavouritesClick = () => {
    navigate('/favourites');
  };

  const handleNotesClick = () => {
    navigate('/notes');
  };

  return (
    <div>
      <header className='flex flex-row fixed justify-between w-full h-16 bg-green-bg'>
        <div className='flex flex-row justify-start'>
          <button className='text-white md:text-xl lg:text-2xl py-2 px-1 sm:py-3 sm:px-6 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={onBarsClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className='mt-2 pt-2 sm:mt-0 px-1 py-2 sm:py-4 sm:pl-6 text-white font-bold text-xl'>QuranWorld</h1>
        </div>
        <div className='flex flex-row mr-1 sm:mr-6'>
          <button className='text-white md:text-xl lg:text-2xl py-2 sm:py-3 sm:px-6 w-16 h-16 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={handleGlobeClick}>
            <FontAwesomeIcon icon={faGlobe} />
          </button>
          <button className='text-white md:text-xl lg:text-2xl py-2 sm:py-3 sm:px-6 w-16 h-16 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={handleHomeClick}>
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button className='text-green-200 md:text-xl lg:text-2xl py-2 sm:py-3 sm:px-6 w-16 h-16 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={handlePlayClick}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          {user ? (
            <div className='relative'>
              <button className='text-white md:text-xl lg:text-2xl py-2 sm:py-3 sm:px-6 w-16 h-16 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={handleUserClick}>
                <FontAwesomeIcon icon={faUser} />
              </button>
              {dropdown && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
                  <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleSignOutClick}>Sign Out</button>
                  <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleFavouritesClick}>Favourites</button>
                  <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleNotesClick}>Notes</button>
                </div>
              )}
            </div>
          ) : (
            <button className='text-white md:text-xl lg:text-2xl py-2 sm:py-3 sm:px-6 w-16 h-16 transition duration-500 ease-in-out transform hover:text-grey-bg' onClick={handleSignInClick}>
              <FontAwesomeIcon icon={faSignIn} />
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
