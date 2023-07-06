import { fetchLanguages } from "../redux/thunk/fetchLanguages";
import { useSelector, useDispatch } from "react-redux";
import React ,{useEffect} from 'react'

const Languages = () => {
    const dispatchLang = useDispatch();
  const languages = useSelector((state) => state.languages.languages);
  useEffect(() => {
    console.log('Before dispatch');
    dispatchLang(fetchLanguages());
  }, []);
  const handleLanguageClick=({code})=>{
console.log('alright')
  }
  return (
    <div className=" flex flex-col mx-8 my-4 p-2 justify-center items-center sm:items-start text-white text-xl  sm:text-2xl"
    >
        <h1 className="text-light-green">Choose a Language for Translation:</h1>
         {languages && Array.isArray(languages) && languages.map((language) => {
        return (
          <div key={language.id} className="hover:text-slate-400 hover:underline p-1"
          onClick={()=>{handleLanguageClick(language.iso_code)}}>
            {language.name}
          </div>
        )
      })}</div>
  )
}

export default Languages