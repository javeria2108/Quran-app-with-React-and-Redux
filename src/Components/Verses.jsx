import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchChapterVerses } from "../redux/thunk/fetchChapterVerse";
import { clearVerses } from "../redux/actions";
import { useParams } from 'react-router-dom';
import png from '../images/verse.png'
export const Verses = () => {
    const { id } = useParams();
  const verses = useSelector((state) => state.verses.data);
  console.log(verses)
  const dispatchVerses = useDispatch();
  useEffect(() => {
    dispatchVerses(fetchChapterVerses(id));
    return () => {
        dispatchVerses(clearVerses());
      }
  }, [dispatchVerses, id]);
  const handleTranslationClick=()=>{

  }

  const handleTafseerClick=()=>{

  }
  return (
    <>
    <div 
    className="bg-navy-bg " >
        <div className="flex flex-row
         justify-between mx-3 my-3">
         <button
     className="bg-green-bg
     text-white
      px-6 py-2 my-5 mx-5
      rounded-full
     hover:bg-light-green
       transition-all duration-500 ease-in-out"
       onClick={handleTranslationClick}>
        Show Translation</button>
        <button  className="bg-green-bg

     text-white
      px-6 py-2 my-5 mx-5
      rounded-full
     hover:bg-light-green
       transition-all duration-500 ease-in-out"
       onClick={handleTafseerClick}>
            Show Tafseer

        </button>
        </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-5">
   
    <img className="w-full max-w-md mx-auto mb-4 object-contain" src={png} alt="In the name of Allah"/>

    <div className="overflow-hidden shadow-lg rounded-lg max-w-lg w-full m-auto p-4 bg-grey-bg">

      <div className="space-y-2">
      
        {verses.map((verse) => (
          <div key={verse.id} className=" border-b border-navy-bg py-2">
            <p className="text-4xl leading-relaxed tracking-wide text-center text-white font-arabic " dir="rtl">{verse.text_indopak} </p>
            <span className="p-2 m-2
            text-white ">{' ' +verse.verse_key}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </>
  );
};
