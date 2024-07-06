import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setTranslationId } from "../redux/features/translationIdSlice";
import { useFetchTranslationsListQuery } from "../redux/features/translations/translationsApi";

const Translations = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  
  const { data: translationsListData, error, isLoading } = useFetchTranslationsListQuery(name.toLowerCase().trim());
  const [translationsList, setTranslationsList] = useState([]);

  useEffect(() => {
    if (translationsListData && translationsListData.translations) {
      setTranslationsList(translationsListData.translations);
    }
  }, [translationsListData]);

  const filteredTranslations = translationsList.filter(
    (translation) =>
      translation.language_name.toLowerCase().trim() ===
      name.toLowerCase().trim()
  );

  const handleClick = (id) => {
    dispatch(setTranslationId(id));
    navigate("/verses/1");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex flex-col mx-8 my-4 p-2 justify-center items-start">
        <h1 className="text-light-green mb-2 text-xl sm:text-2xl">
          Choose Translation:
        </h1>
        {filteredTranslations.map((translation) => (
          <div key={translation.id}>
            <p
              className="text-white text-xl hover:text-slate-400 hover:underline p-1 sm:text-2xl"
              onClick={() => handleClick(translation.id)}
            >
              {translation.name}
            </p>
            <p className="text-grey-l italic">
              {"Author: " + translation.author_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Translations;
