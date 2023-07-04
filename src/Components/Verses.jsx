import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchChapterVerses } from "../redux/thunk/fetchChapterVerse";
import { useParams } from 'react-router-dom';

export const Verses = () => {
    const { id } = useParams();
  const verses = useSelector((state) => state.verses.data);

  const dispatchVerses = useDispatch();
  useEffect(() => {
    dispatchVerses(fetchChapterVerses(id));
  }, [dispatchVerses, id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-l py-5">
    <div className="overflow-hidden shadow-lg rounded-lg max-w-lg w-full m-auto p-4 bg-dark-maroon">
      <div className="space-y-2">
        {verses.map((verse) => (
          <div key={verse.id} className="border-t border-b py-2">
            <p className="text-xl text-center text-white " dir="rtl">{verse.text_indopak}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
