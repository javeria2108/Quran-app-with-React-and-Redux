import { fetchLanguages } from "../redux/thunk/fetchLanguages";
import { useSelector, useDispatch } from "react-redux";
import React ,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Languages = () => {
    const dispatchLang = useDispatch();
    const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.languages);
  useEffect(() => {
   
    dispatchLang(fetchLanguages());
  }, []);
  const handleLanguageClick=(name)=>{

navigate(`/translations/${name}`)
  }
  return (
    <div>
    <div className=" flex flex-col mx-8 mb-4  p-2 justify-center items-center sm:items-start text-white text-xl  sm:text-2xl"
    >
        <h1 className="text-light-green">Choose a Language for Translation:</h1>
         {languages && Array.isArray(languages) && languages.map((language) => {
        return (
          <div key={language.id} className="hover:text-slate-400 hover:underline p-1"
          onClick={()=>{handleLanguageClick(language.name)}}>
            {language.name}
          </div>
        )
      })}</div>
      </div>
  )
}

export default Languages