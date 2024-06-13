import React, { useState } from "react";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchChapters } from "../redux/thunk/fetchChapters";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { auth } from "../../firebaseConfig";

const play=<FontAwesomeIcon icon={faPlay}/>
const user=auth.currentUser;
const Home = () => {
  const chapters = useSelector((state) => state.chapters.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch]);
const navigate = useNavigate()
const handlePlayClick = () => {
    
    
  navigate('/player/1')
};

const [Id,setId]=useState(1);
const handleChapterClick=(id)=>{
    console.log('clicked '+id)
    setId(id)
    navigate(`/verses/${id}`);
  }
  return (
    <div className="">
      
      <div className="w-full h-fit sm:h-fit bg-hero-pattern flex flex-col items-center justify-center">
      <div className="flex m-2 mt-14">
      <AnimatePresence>
    {"Welcome to Quran World!".split("").map((char, i) => {
        return (
            <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl text-white"
                key={i}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
            >
                {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
        );
    })}
</AnimatePresence>


      </div>
<p className="text-white text-xl sm:text-2xl">Click below to play melodious recitations</p>
<button 
          className=" text-green-bg text-3xl sm:text-4xl cursor-pointer hover:text-green-950
          mt-2"
          onClick={handlePlayClick}>
         {play}
        </button>
        <div className="mb-8 sm:mb-12">  <Search /></div>
      </div>
    
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
