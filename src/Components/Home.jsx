import React, { useState } from "react";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchChapters } from "../redux/thunk";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const play=<FontAwesomeIcon icon={faPlay}/>
const handlePlayClick = () => {
    
    
  navigate('/player/1')
};
const Home = () => {
  const chapters = useSelector((state) => state.chapters.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch]);
const navigate = useNavigate();
const [Id,setId]=useState(1);
const handleChapterClick=(id)=>{
    console.log('clicked '+id)
    setId(id)
    navigate(`/verses/${id}`);
  }
  return (
    <div className="">
      
      <div className="w-full h-80 sm:h-96 bg-hero-pattern flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl m-2 text-white mt-10">
          Welcome to Quran World!  </h1>
<p className="text-white text-xl sm:text-2xl">Click below to play melodious recitations</p>
<button 
          className=" text-green-bg text-2xl sm:text-3xl cursor-pointer hover:text-green-950
          mt-2"
          onClick={handlePlayClick}>
         {play}
        </button>
      
      </div>
      <div className="mb-5 sm:mb-8 ">  <Search /></div>
      <div className="flex flex-col  justify-center ">
        <hr/>
        {chapters.map((chapter) => {
          return (
            <div
              className=" w-full  
                 py-5 px-5 text-white hover:cursor-pointer "
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
            >
              <div className="m-3">
              <div className="flex flex-row  justify-between text-xl sm:text-2xl">
                <p className="hover:underline">{chapter.id + '. '}{chapter.name_simple}</p>
                <p>{chapter.name_arabic}</p>
              </div>
              <h1 className="text-green-bg sm:text-xl text-lgs">
                Chapter Info: 
              </h1>
              <p>{'translated name: '+chapter.translated_name.name}</p>
                <p>{"verses: " + chapter.verses_count}</p>
                <p>{"Revelead in: " + chapter.revelation_place}</p>

                
              </div>

              <hr className="mt-5 border-grey-l" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
