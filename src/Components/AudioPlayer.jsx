import { useEffect,useRef,useState  } from "react";
import { useParams } from 'react-router-dom';
import { fetchAudioUrl } from "../redux/thunk/fetchAudio";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause,faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { fetchChapters } from "../redux/thunk";


const play=<FontAwesomeIcon icon={faPlay}/>
const pause=<FontAwesomeIcon icon={faPause}/>
const forward=<FontAwesomeIcon icon={faForwardStep}/>
const backward=<FontAwesomeIcon icon={faBackwardStep}/>
export function QuranAudioPlayer() {
  const { id : idParam} = useParams();
  const[id,setId]=useState(parseInt(idParam))
  const dispatchAudio = useDispatch();
  const audioUrl = useSelector((state)=>state.audio.audioUrl);
  const chapters = useSelector((state) => state.chapters.data);
  const [isPlaying, setPlaying] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgId,setImgId]=useState(0);
    const audioRef = useRef();
    useEffect(() => {
      dispatchAudio(fetchAudioUrl(id));
    }, [dispatchAudio, id]);

  
  useEffect(() => {
    if(audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch,id]);
  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };
  useEffect(() => {
    fetch("https://pixabay.com/api/?key=36974515-bb15443a977915a9a4d80a37a&q=night%20sky&image_type=photo&pretty=true")
      .then(res => {
        console.log("Response Status:", res.status);
       return res.json()})
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(images);
const Image=images[imgId];
const handleForward=()=>{
  if (id < 114) {
    setId(id + 1);
    setPlaying(false)
    if ((imgId+1)%20 === 0){
      setImgId(0);
    }
    else{
      setImgId(imgId+1);
    }
  }
  }
const handleBackward=()=>{
  if (id > 1) {
    setId(id - 1);
    setPlaying(false)
  }
}
const chapterInfo=chapters[id-1];
let chapterNameSimple, chapterNameArabic;
if (chapterInfo) {
  chapterNameSimple = chapterInfo.name_simple;
  chapterNameArabic = chapterInfo.name_arabic;
}

 
  



    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-cyan-700 to-slate-950 text-white">
     <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-3/4 sm:h-11/12 md:h-10/12 lg:h-3/4 bg-black bg-opacity-50 rounded shadow p-5">
      <audio ref={audioRef} src={audioUrl} preload="metadata">
        Your browser does not support the audio element.
      </audio>

      <div className="mt-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl">{chapterNameSimple}</h1>
<div className="w-96 min-h-max py-2 object-cover">
<img src={Image.webformatURL}/>
</div>

<h1 className="text-3xl">{chapterNameArabic}</h1>
      </div>
      
      <div className="flex flex-row mx-5 py-1 sm:mx-12 sm:py-3 md:mx-20 rounded-full bg-black  align-bottom justify-center space-x-4">
      <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer"
        onClick={handleBackward} >{backward}
        </button>
        <button 
          className="px-6 sm:px-10 py-2 text-white text-xl sm:text-2xl cursor-pointer"
          onClick={togglePlayPause}>
          {isPlaying ? pause : play}
        </button>
        <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer"
       onClick={handleForward}  >{forward}
        </button>
        {/* You can add more controls here */}
      </div>
      </div>
    </div>
    )
}
