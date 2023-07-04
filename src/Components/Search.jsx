import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchChapters } from '../redux/thunk';
const Search = () => {
  
  const chapters = useSelector((state) => state.chapters.data);
console.log(chapters);

  const [inputText, setInputText] = useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchChapters());

  },[dispatch])
 
  const filteredData=chapters.filter(
    chapter=>chapter.name_simple.toLowerCase().includes(inputText.toLowerCase()))
    let inputHandler = (e) => {
   
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  return (
    <div className='flex flex-col items-center max-w-md mx-auto '>
      <input
      className=' mt-20 mb-3 w-80 px-8 py-3 rounded-full bg-yellow-l text-dark-maroon
       placeholder-dark-maroon focus: ring-dark-maroon' 
       type="text"
        placeholder='What do you want to read?'
       onChange={inputHandler}
         />
         
        <div className=" w-60 py-1 text-sm bg-green-bg text-white rounded-md shadow-lg  ">
          {inputText && filteredData.map((chapter)=>{
            return(
              
                <div className='flex flex-row justify-between px-4'  key={chapter.id}>
        
                  <p>{chapter.name_simple}</p>
                  <p>{chapter.name_arabic}</p>

                   
                </div>
            );

        })
      }
    </div>
    </div>
  )
}

export default Search