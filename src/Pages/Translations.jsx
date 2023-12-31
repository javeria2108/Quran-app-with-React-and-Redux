import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchTranslationsList } from '../redux/thunk/fetchTranslationsList';
import { useParams } from 'react-router-dom';
import { setTranslationId } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
const Translations = () => {
    const dispatch=useDispatch();
    const translationsList = useSelector(state => state.translationsList.translationsList);
    const {name}= useParams(); // you would get this value based on the user's selection
    useEffect(() => {
      dispatch(fetchTranslationsList());
    }, [dispatch, name]);
 const [msg,setMsg]=useState(false)   
const filteredTranslations=translationsList.filter(translation => 
    translation.language_name.toLowerCase().trim() === name.toLowerCase().trim()

);
const navigate=useNavigate()
const handleClick=(id)=>{
    
    dispatch(setTranslationId(id));
    setMsg(true);
    navigate('/verses/1')

}
  return (
    <div>
    <div className=" flex flex-col mx-8 my-4 p-2 justify-center items-start">
      <h1 className="text-light-green mb-2 text-xl  sm:text-2xl">Choose Translation:</h1>
      
        {filteredTranslations.map((translation)=>{
            return(
                
                <div key={translation.id} className="">
                  <p  className='text-white text-xl hover:text-slate-400 hover:underline p-1 sm:text-2xl'
                  onClick={()=>{handleClick(translation.id)}}>  {translation.name}</p>
                    <p className='text-grey-l italic'>{'Author: '+translation.author_name}</p>
                </div>
            )
        })}
    </div>
    <Footer/>
    </div>
  )
}

export default Translations