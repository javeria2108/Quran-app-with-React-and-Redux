import { useEffect,useRef,useState  } from "react";
import { useParams } from 'react-router-dom';
import { fetchAudioUrl } from "../redux/thunk/fetchAudio";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause,faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";



const play=<FontAwesomeIcon icon={faPlay}/>
const pause=<FontAwesomeIcon icon={faPause}/>
const forward=<FontAwesomeIcon icon={faForwardStep}/>
const backward=<FontAwesomeIcon icon={faBackwardStep}/>
export function QuranAudioPlayer() {
  const { id } = useParams();
  const dispatchAudio = useDispatch();
  const audioUrl = useSelector((state)=>state.audio.audioUrl);
  const [isPlaying, setPlaying] = useState(false);
    const audioRef = useRef();
    useEffect(() => {
      dispatchAudio(fetchAudioUrl(id));
    }, [dispatchAudio, id]);

  
  useEffect(() => {
    if(audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };



    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-cyan-700 to-slate-950 text-white">
     <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-3/4 sm:h-11/12 md:h-10/12 lg:h-3/4 bg-black bg-opacity-50 rounded shadow p-5">
      <audio ref={audioRef} src={audioUrl} preload="metadata">
        Your browser does not support the audio element.
      </audio>
      
      <div className="flex flex-row mx-5 py-1 sm:mx-8 sm:py-3 rounded-full bg-black mt-60 sm:mt-80 align-bottom justify-center space-x-4">
      <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer"
         >{backward}
        </button>
        <button 
          className="px-6 sm:px-10 py-2 text-white text-xl sm:text-2xl cursor-pointer"
          onClick={togglePlayPause}>
          {isPlaying ? pause : play}
        </button>
        <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer"
         >{forward}
        </button>
        {/* You can add more controls here */}
      </div>
      </div>
    </div>
    )
}
