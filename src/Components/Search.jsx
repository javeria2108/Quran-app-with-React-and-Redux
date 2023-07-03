import React from 'react'
import { useState } from 'react';
import Chapters from './api';
const Search = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
   
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
 /* const filteredData=(chapters)=>{
    console.log('props received'+ chapters);
    return  inputText!=='' && chapters.text.toLowerCase().includes(inputText)
   
  }*/
  return (
    <div className='flex flex-col items-center max-w-md mx-auto'>
      <input
      className='my-20 w-80 px-8 py-3 rounded-full bg-yellow-l text-dark-maroon placeholder-dark-maroon' 
       type="text"
        placeholder='What do you want to read?'
       onChange={inputHandler}
         />
    </div>
  )
}

export default Search