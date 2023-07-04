import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchChapterVerses } from "../redux/thunk/fetchChapterVerse";
import { clearVerses } from "../redux/actions";
import { useParams } from 'react-router-dom';

export const Verses = () => {
    const { id } = useParams();
  const verses = useSelector((state) => state.verses.data);

  const dispatchVerses = useDispatch();
  useEffect(() => {
    dispatchVerses(fetchChapterVerses(id));
    return () => {
        dispatchVerses(clearVerses());
      }
  }, [dispatchVerses, id]);

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
     hover:bg-dark-maroon 
       transition-all duration-500 ease-in-out">
        Show Translation</button>
        <button  className="bg-green-bg

     text-white
      px-6 py-2 my-5 mx-5
      rounded-full
     hover:bg-dark-maroon 
       transition-all duration-500 ease-in-out"
       >
            Show Tafseer

        </button>
        </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-5">
   

    <div className="overflow-hidden shadow-lg rounded-lg max-w-lg w-full m-auto p-4 bg-yellow-l">
      <div className="space-y-2">
        {verses.map((verse) => (
          <div key={verse.id} className=" border-b border-dark-maroon py-2">
            <p className="text-xl text-center text-navy-bg " dir="rtl">{verse.text_indopak}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </>
  );
};
