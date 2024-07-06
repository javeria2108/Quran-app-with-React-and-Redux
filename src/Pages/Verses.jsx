
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchVersesByChapterQuery } from "../redux/features/verses/versesApi";
import { useFetchTranslationQuery } from "../redux/features/translations/translationsApi";
import png from "../images/verse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const play = <FontAwesomeIcon icon={faPlay} />;

export const Verses = () => {
  const { id } = useParams();
  const [translate, setTranslate] = useState(false);
  const translationId = useSelector((state) => state.translationId);

  function cleanHTMLTags(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.body.textContent || "";
  }

  const [verses, setVerses] = useState([]);
  const [translations, setTranslations] = useState([]);

  const { data: versesData, error, isLoading } = useFetchVersesByChapterQuery(id);
  const { data: translationData } = useFetchTranslationQuery({ id, translationId });

  useEffect(() => {
    if (translationData && translationData.translations) {
      setTranslations(translationData.translations);
    }
  }, [translationData]);

  useEffect(() => {
    if (versesData && versesData.verses) {
      setVerses(versesData.verses);
    }
  }, [versesData]);

  const handleTranslationClick = () => {
    setTranslate((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const handlePlayClick = () => {
    navigate(`/player/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-navy-bg">
      <div className="flex flex-row mx-3 my-3">
        <button
          className="bg-green-bg text-white px-6 py-2 my-5 mx-5 rounded-full hover:bg-light-green transition-all duration-500 ease-in-out"
          onClick={handleTranslationClick}
        >
          {translate ? "Hide Translation" : "Show Translation"}
        </button>
        <button
          className="text-green-bg md:text-xl lg:text-2xl py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 transition duration-500 ease-in-out transform hover:text-green-200"
          onClick={handlePlayClick}
        >
          {play}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-5">
        <img
          className="w-full max-w-md mx-auto mb-4 object-contain"
          src={png}
          alt="In the name of Allah"
        />

        <div className="overflow-hidden shadow-lg rounded-lg max-w-lg w-full m-auto p-4 bg-grey-bg">
          <div className="space-y-2">
            {verses.map((verse, index) => {
              const translation = translations[index];

              return (
                <div key={verse.id} className="border-b border-navy-bg py-2">
                  <p
                    className="text-4xl leading-relaxed tracking-wide text-center text-white font-arabic"
                    dir="rtl"
                  >
                    {verse.text_indopak}
                  </p>
                  {translate && translation && (
                    <div className="text-white text-center" dir="rtl">
                      {cleanHTMLTags(translation.text)}
                    </div>
                  )}
                  <span className="p-2 m-2 text-green-bg italic">
                    {" " + verse.verse_key}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
