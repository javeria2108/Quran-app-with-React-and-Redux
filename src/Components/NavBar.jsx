import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const bars = <FontAwesomeIcon icon={faBars} />;
const globe = <FontAwesomeIcon icon={faGlobe} />;
const search =<FontAwesomeIcon icon={faMagnifyingGlass}/>

const NavBar = () => {
  return (
    <div>
        <header className='flex flex-row justify-between w-full h-16 bg-green-bg '>
          <div className='flex flex-row justify-start'>
            <button className='text-white 
            
              md:text-xl 
              lg:text-2xl 
              py-2 
              px-4 
              md:py-3 
              md:px-6 
              lg:py-4 
              lg:px-8 
              w-16 h-16
              transition duration-500 ease-in-out transform 
      hover:-translate-y-1 hover:scale-110'>{bars}</button>
            <h1 className='py-4 pl-6 text-white font-bold
            text-xl'>QuranQuill</h1>
            </div>
            <div className='flex flex-row mr-6 '>
              <button
               className='text-white 
            
               md:text-xl 
               lg:text-2xl 
               py-2 
               px-4
               md:py-3 
               md:px-6 
               lg:py-4 
               lg:px-8 
               w-16 h-16
               transition duration-500 ease-in-out transform 
       hover:-translate-y-1 hover:scale-110'>
                
                {globe}
              </button>
              <button  className='text-white 
            
            md:text-xl 
            lg:text-2xl 
            py-2 
            px-4 
            md:py-3 
            md:px-6 
            lg:py-4 
            lg:px-8 
            w-16 h-16
            transition duration-500 ease-in-out transform 
    hover:-translate-y-1 hover:scale-110'>
             
              
                {search}
              </button>

            </div>
            </header>
    </div>
  )
}

export default NavBar