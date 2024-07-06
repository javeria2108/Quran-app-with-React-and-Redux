import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { useFetchAudioQuery } from "../redux/features/audio/audioApi";
import { useFetchChaptersQuery } from "../redux/features/chapters/chaptersApi";

const play = <FontAwesomeIcon icon={faPlay} />;
const pause = <FontAwesomeIcon icon={faPause} />;
const forward = <FontAwesomeIcon icon={faForwardStep} />;
const backward = <FontAwesomeIcon icon={faBackwardStep} />;

export function QuranAudioPlayer() {
  const { id: idParam } = useParams();
  const [id, setId] = useState(parseInt(idParam));
  const reciterId = useSelector((state) => state.reciterId);

  const { data: audioData, error: audioError, isLoading: audioLoading } = useFetchAudioQuery({ id, reciterId });
  const [isPlaying, setPlaying] = useState(false);

  const [chapters, setChapters] = useState([]);
  const { data: chaptersData, error: chaptersError, isLoading: chaptersLoading } = useFetchChaptersQuery();

  useEffect(() => {
    if (chaptersData && Array.isArray(chaptersData)) {
      setChapters(chaptersData);
    } else if (chaptersData && chaptersData.chapters) {
      setChapters(chaptersData.chapters);
    }
  }, [chaptersData]);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleForward = () => {
    if (id < 114) {
      setId(id + 1);
      setPlaying(false);
    }
  };

  const handleBackward = () => {
    if (id > 1) {
      setId(id - 1);
      setPlaying(false);
    }
  };

  const chapterInfo = chapters[id - 1];
  let chapterNameSimple, chapterNameArabic;
  if (chapterInfo) {
    chapterNameSimple = chapterInfo.name_simple;
    chapterNameArabic = chapterInfo.name_arabic;
  }

  const audioUrl = audioData?.audio_file?.audio_url;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-cyan-700 to-slate-950 text-white">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-fit bg-black bg-opacity-50 rounded shadow p-5">
        {audioLoading && <p>Loading audio...</p>}
        {audioError && <p>Error loading audio: {audioError.message}</p>}
        {audioUrl && (
          <audio ref={audioRef} src={audioUrl} preload="metadata">
            Your browser does not support the audio element.
          </audio>
        )}
        <div className="mt-6 flex flex-col justify-center items-center">
          <div className="rounded-full border-2 shadow-lg overflow-hidden h-64 w-64">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGt5JTIwd2F5fGVufDB8fDB8fHww&w=1000&q=80"
              alt="Chapter illustration"
            />
          </div>
          <h1 className="text-4xl pt-3">{chapterNameSimple}</h1>
          <h1 className="text-3xl py-2">{chapterNameArabic}</h1>
        </div>

        <div className="flex flex-row mx-5 py-1 sm:mx-12 sm:py-3 md:mx-20 rounded-full bg-slate-950 align-bottom justify-center space-x-4">
          <button
            className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer hover:text-zinc-500"
            onClick={handleBackward}
          >
            {backward}
          </button>
          <button
            className="px-6 sm:px-10 py-2 text-green-bg text-xl sm:text-2xl cursor-pointer hover:text-green-950"
            onClick={togglePlayPause}
          >
            {isPlaying ? pause : play}
          </button>
          <button
            className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer hover:text-zinc-500"
            onClick={handleForward}
          >
            {forward}
          </button>
        </div>
      </div>
    </div>
  );
}
