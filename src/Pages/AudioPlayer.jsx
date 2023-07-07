import { useEffect,useRef,useState  } from "react";
import { useParams } from 'react-router-dom';
import { fetchAudioUrl } from "../redux/thunk/fetchAudio";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause,faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { fetchChapters } from "../redux/thunk";

import { useNavigate } from "react-router-dom";
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
  const reciterId = useSelector((state) => state.reciterId);
  console.log(reciterId)
  const [imgId,setImgId]=useState(0);
    const audioRef = useRef();
    useEffect(() => {
      dispatchAudio(fetchAudioUrl(id,reciterId));
    }, [dispatchAudio, id,reciterId]);

  
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
const navigate=useNavigate()
const handleReciterClick=()=>{
navigate(`/reciters/${id}`)
}
const chapterInfo=chapters[id-1];
let chapterNameSimple, chapterNameArabic;
if (chapterInfo) {
  chapterNameSimple = chapterInfo.name_simple;
  chapterNameArabic = chapterInfo.name_arabic;
}

 const imaes=["https://pixabay.com/get/gb67fe157c45831c79fa3cf80a64eb7b13cbe2b68ef9d369125af0226221b2509360d1b5ff170f41a5b2e35f9ccc89d9d782b2a7186fc47f3bdffb1d13ce48e66_640.jpg","https://pixabay.com/get/gee2b424b73bd15490854928dfad2fd8fb7f8be688e8df0addb2e9deec8f8dbc869c330431a748f6b7b9eef35312275ca2bcd64723b107a7cff8dd36cb71f95a0_640.jpg",
 "https://pixabay.com/get/gbf44a9712b558f71dffaf7c9f7a03982199db05e1d927710541268402478c5c761f99e6c1585b075be49303e12b5dbd4891847f48dd06385a69861b2752f31dc_640.jpg","https://pixabay.com/get/g51d6888074dfeab23f83e7f82d6597b9647c3192a1ace1adc6acdc3f026618aee6b126d58c78309285e6c989a00fa78e_640.jpg","https://pixabay.com/get/g98b0a7fb1ba8863314be24c7a1cd4c9c673348dea4a107d60aed585a3a947d1347f070e2931e570c193ce71d2a2cb3bd42ffd3e60404e57529f5a32e43fec995_640.jpg",
 "https://pixabay.com/get/gc2229d12cf5a6d3afdb992fc2adb3763e50b3348390a4db1ae68276f6511ce1365160d93ea4991aad121cea1ad2ce00f_640.jpg","https://pixabay.com/get/g0004dbf74ea5c96281cb7d6b932a8e6646807f4d8a2c116f11a9b52515aefa909561daba203d3a6c2952c71b829af3a14cf49d1a06033fe6335740de0f43ab79_640.jpg","https://pixabay.com/get/g6f4b6fb0592217c23d5efc761592f51653cffb1e1dd4fb2613bcc9461e2c842e364da1f16a7735c6ce504f283e2bff8f_640.jpg",
 "https://pixabay.com/get/gb878f661eb2eae66d2a7d63a058a8caa34d076f5b40d644da4ea6f3abe3d7b640ecd13660e699d62fceb7ff5d76a50c3_640.jpg",
 "https://pixabay.com/get/g96747768e43af0413d5bb2ee57ea9d1e17cef01e67609b1f229632ed162ffe7fe964e57e882bdec79a2ebdbd1bffbc67f7eba170d55be74b982e4d478340e61e_640.jpg",
 "https://pixabay.com/get/g939fb5c62821c118c07f9bf45484ca1866bb353f534db52a0ed3a3d28d186565f6e88a1ed6247e5ead87f783f16ab90c257413bd11d24f98fb9b345596946be8_640.jpg","https://pixabay.com/get/g34f357765a2755206d999d058e689d6cb5fc256d9237b486175b56d8a715726e581f138992599530d4ee22f18239bb925557b2a38db098dda6cb7dffe0f17b77_640.jpg",
 "https://pixabay.com/get/g86e68da84ead78588ded588c41cf533909918c1fae6f2c71085cc97d5a82d96b85f670a2cdc30913718d82eed57383aaa41e67f6a97df6e9ce2db2dd24db2747_640.jpg","https://pixabay.com/get/g3fc5e1686b42b66edfd58c1a5297ec33957d0141fc2a64277c9c9a46722ad3f0177747a69c2f3b3da3a83734d42f04b7c7cef3d261315f3afcab41ff93233f1a_640.jpg",
 "https://pixabay.com/get/gc932a701087dc9e2130f6420f9cc06d54ea2c248445d20d1a30a9d0ada49cd57a2cd5f00f846774343283c7e5150064ec35497b1c7b332e9bf725472f4fad6a0_640.jpg","https://pixabay.com/get/gceff5cabb1d697961ffdbe283cf8a605d6defde41d90ccbc7b10c45668d4469e7df169cedaeae38cb3305c2077c7e7417a755a1825b8398182714f49df5e5594_640.jpg",
 "https://pixabay.com/get/gc8fb3a7ec43b1020beaa9f627111a6a6b118fe6e2b825468ef96214b55824b4c3c5907dee9417ce4c20fa2402c2b743d_640.jpg","https://pixabay.com/get/gb4c9937d8aa6bc8713de21f44639198e7089148692243bb72b1bc67d389b9d4669e7912fbad4fa0ac0a359f4545d3aac_640.jpg",
 "https://pixabay.com/get/g9ea0904c3dcd8766d5678cec9877562a4ff77988dcddac31a0d0408435300f4522bf9b611aad9782ec75a1cd04cfd4bb31f4b2568a2614657194d199437d3ef2_640.jpg","https://pixabay.com/get/g6afc25265f12cbfc6b41f10cffb4c9c784f96d738e05b71629985a0454a2d88505405e806607e42674c866ba1f91038615ed824fded3850944b01d06eb503889_640.jpg"]
  
 const Image=imaes[imgId];


    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-cyan-700 to-slate-950 text-white">
     <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-3/4 sm:h-11/12 md:h-10/12 lg:h-3/4 bg-black bg-opacity-50 rounded shadow p-5">
      <audio ref={audioRef} src={audioUrl} preload="metadata">
        Your browser does not support the audio element.
      </audio>

     
      
    <div className="mt-6 flex flex-col justify-center items-center">
    <button onClick={handleReciterClick}>Change Reciter</button>
      <h1 className="text-4xl">{chapterNameSimple }</h1>
<div className="w-96 min-h-max py-2 object-cover">
<img src={Image}/>
</div>

<h1 className="text-3xl py-2">{chapterNameArabic}</h1>
      </div>
      
      <div className="flex flex-row mx-5 py-1 sm:mx-12 sm:py-3 md:mx-20 rounded-full bg-slate-950
       align-bottom justify-center space-x-4 ">
      <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer hover:text-zinc-500"
        onClick={handleBackward} >{backward}
        </button>
        <button 
          className="px-6 sm:px-10 py-2 text-green-bg text-xl sm:text-2xl cursor-pointer hover:text-green-950"
          onClick={togglePlayPause}>
          {isPlaying ? pause : play}
        </button>
        <button 
          className="px-4 py-2 text-white text-xl sm:text-2xl cursor-pointer  hover:text-zinc-500"
       onClick={handleForward}  >{forward}
        </button>
        
      </div>
      </div>
    </div>
    )
}
