import { useFetchLanguagesQuery } from "../redux/features/languages/languagesApi"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Languages = () => {
  const { data: languagesData, error, isLoading } = useFetchLanguagesQuery();
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (languagesData && languagesData.languages) {
      setLanguages(languagesData.languages);
    }
  }, [languagesData]);

  const handleLanguageClick = (name) => {
    navigate(`/translations/${name}`);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className=" flex flex-col mx-8 mb-4  p-2 justify-center items-center sm:items-start text-white text-xl  sm:text-2xl">
        <h1 className="text-light-green">Choose a Language for Translation:</h1>
        {languages &&
          Array.isArray(languages) &&
          languages.map((language) => {
            return (
              <div
                key={language.id}
                className="hover:text-slate-400 hover:underline p-1"
                onClick={() => {
                  handleLanguageClick(language.name);
                }}
              >
                {language.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Languages;
