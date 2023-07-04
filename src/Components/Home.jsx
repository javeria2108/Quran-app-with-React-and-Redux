import React, { useState } from "react";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchChapters } from "../redux/thunk";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

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
      <Search />
      <div className="flex flex-wrap justify-center">
        {chapters.map((chapter) => {
          return (
            <div
              className="box-content w-56 h-20 m-5 border-2
                 p-5 text-white hover:cursor-pointer "
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
            >
              <div className="flex flex-row justify-between">
                <p>{chapter.name_simple}</p>
                <p>{chapter.name_arabic}</p>
              </div>
              <div>
                <p>{"verses: " + chapter.verses_count}</p>
                <p>{"Revelead in: " + chapter.revelation_place}</p>

                <p>{chapter.translated_name.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
