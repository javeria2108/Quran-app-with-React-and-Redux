import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { useFetchChaptersQuery } from "../redux/features/chapters/chaptersApi";

const play = <FontAwesomeIcon icon={faPlay} />;

const Home = () => {
  const [chapters, setChapters] = useState([]);
  const { data: chaptersData, error, isLoading } = useFetchChaptersQuery();

  useEffect(() => {
    if (chaptersData && Array.isArray(chaptersData)) {
      setChapters(chaptersData);
    } else if (chaptersData && chaptersData.chapters) {
      setChapters(chaptersData.chapters);
    }
  }, [chaptersData]);

  console.log("Chapters state:", chapters);
  console.log("Raw chaptersData:", chaptersData);

  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/player/1');
  };

  const [Id, setId] = useState(1);
  const handleChapterClick = (id) => {
    console.log('clicked ' + id);
    setId(id);
    navigate(`/verses/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="">
      <div className="w-full h-fit sm:h-fit bg-hero-pattern flex flex-col items-center justify-center">
        <div className="flex m-2 mt-14">
          <AnimatePresence>
            {"Welcome to Quran World!".split("").map((char, i) => (
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl text-white"
                key={i}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.h1>
            ))}
          </AnimatePresence>
        </div>
        <p className="text-white text-xl sm:text-2xl">Click below to play melodious recitations</p>
        <button
          className="text-green-bg text-3xl sm:text-4xl cursor-pointer hover:text-green-950 mt-2"
          onClick={handlePlayClick}
        >
          {play}
        </button>
        <div className="mb-8 sm:mb-12">
          <Search />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <hr />
        {isLoading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          chapters && chapters.length > 0 && chapters.map((chapter) => (
            <div
              className="w-full py-5 px-5 text-white hover:cursor-pointer"
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
            >
              <div className="m-3">
                <div className="flex flex-row justify-between text-xl sm:text-2xl">
                  <p className="hover:underline">{chapter.id + '. '}{chapter.name_simple}</p>
                  <p>{chapter.name_arabic}</p>
                </div>
                <h1 className="text-green-bg sm:text-xl text-lgs">
                  Chapter Info:
                </h1>
                <p>{'translated name: ' + chapter.translated_name.name}</p>
                <p>{"verses: " + chapter.verses_count}</p>
                <p>{"Revealed in: " + chapter.revelation_place}</p>
              </div>
              <hr className="mt-5 border-grey-l" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
