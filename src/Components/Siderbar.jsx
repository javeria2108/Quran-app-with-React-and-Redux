import React from 'react'
import { useNavigate } from 'react-router-dom'
const Siderbar = () => {
    const navigate=useNavigate();
    const handleTranslationClick=()=>{
navigate('/languages')
    }
    const handleReciterClick=()=>{
navigate('/reciters/1')
    }
    const handleAboutClick=()=>{
navigate('/about')
    }
    const handleFeedbackClick=()=>{
navigate('/feedback')
    }
  return (
    <div className=' '>
        <div className='flex flex-col items-start border-t-2 border-grey-l w-full text-xl text-white '>
            <p className='hover:cursor-pointer w-full py-2
             sm:py-4 px-3 sm:px-5 mt-3 sm:mt-5 hover:bg-green-bg
             hover:text-slate-950'
             onClick={handleAboutClick}>
                About</p>
            <hr className='border-grey-bg'/>
            <p className='hover:cursor-pointer w-full py-2 sm:py-4
             px-3 sm:px-5 hover:bg-green-bg
             hover:text-slate-950'
              onClick={handleReciterClick}>
                Change Reciter</p>
            <hr/>
            <p className='hover:cursor-pointer w-full py-2 sm:py-4 
            px-3 sm:px-5 hover:bg-green-bg hover:text-slate-950'
            onClick={handleTranslationClick}>
                
                Change Translation</p>
            <hr/>
            <p className='hover:cursor-pointer w-full py-2 
            sm:py-4 px-3 sm:px-5 hover:bg-green-bg hover:text-slate-950'
           onClick={handleFeedbackClick} >Send feedback</p>
            <hr/>

        </div>

    </div>
  )
}

export default Siderbar