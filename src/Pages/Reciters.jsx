import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setReciterId } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRecitersList } from '../redux/thunk/fetchRecitersList';
export const Reciters = () => {
    
    const dispatch = useDispatch();
    const recitersList = useSelector(state => state.reciters);
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(fetchRecitersList());
    }, [dispatch]);
    const handleClick=(id)=>{
    
        dispatch(setReciterId(id));
       navigate('/player/1')
    
    }

  return (
    <div className=" flex flex-col mx-8 mt-16 mb-4 p-2 justify-center items-start">
    <h1 className="text-light-green mb-2 text-xl  sm:text-2xl">Choose Reciter:</h1>
    
      {recitersList.map((reciter)=>{
          return(
              
              <div key={reciter.id} className="">
                <p  className='text-white text-xl hover:text-slate-400 hover:underline p-1 sm:text-2xl'
               onClick={()=>{handleClick(reciter.id)}}>  {reciter.name}</p>
                  
              </div>
          )
      })}
  </div>
  )
}
