import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay,faGlobe ,faHome} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const bars = <FontAwesomeIcon icon={faBars} />;
const globe = <FontAwesomeIcon icon={faGlobe} />;
const home =<FontAwesomeIcon icon={faHome}/>
const play=<FontAwesomeIcon icon={faPlay}/>
const NavBar = () => {
  const navigate=useNavigate()
  const handlePlayClick = () => {
    
    
    navigate('/player/1')
  };
  const handleHomeClick=()=>{
    navigate('/')
  }
  const handleGlobeClick=()=>{
navigate('/languages')
  }
  return (
    <div>
        <header className='flex flex-row justify-between w-full h-16 bg-green-bg '>
          <div className='flex flex-row justify-start'>
            <button className='text-white 
            
              md:text-xl 
              lg:text-2xl 
              py-2 
              px-1
             sm:py-3 sm:px-6
          
              transition duration-500 ease-in-out transform 
      hover:text-grey-bg'>{bars}</button>
            <h1 className='
            py-3 px-1 sm:py-4 sm:pl-6 text-white font-bold
            text-xl'>QuranWorld</h1>
            </div>
            <div className='flex flex-row mr-1 sm:mr-6 '>
              <button
               className='text-white 
            
               md:text-xl 
               lg:text-2xl 
               py-2 
               
               sm:py-3 sm:px-6
               w-16 h-16
               transition duration-500 ease-in-out transform 
       hover:text-grey-bg'
       onClick={handleGlobeClick}>
                
                {globe}
              </button>
              <button  className='text-white 
            
            md:text-xl 
            lg:text-2xl 
            py-2 
            
            sm:py-3 sm:px-6
            w-16 h-16
            transition duration-500 ease-in-out transform 
    hover:text-grey-bg'
    onClick={handleHomeClick}>
             
              
                {home}
              </button>
              <button  className='text-green-200 
            
            md:text-xl 
            lg:text-2xl 
            py-2 
      
            sm:py-3 sm:px-6
            w-16 h-16
            transition duration-500 ease-in-out transform 
    hover:text-grey-bg '
    onClick={handlePlayClick}>
             
              
                {play}
              </button>

            </div>
            </header>
    </div>
  )
}

export default NavBar