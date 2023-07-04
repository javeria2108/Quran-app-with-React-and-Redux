import React from 'react'
import Search from './Search'
import { useSelector,useDispatch } from 'react-redux';
import { fetchChapters } from '../redux/thunk';
import { useEffect } from 'react';

const Home = () => {
  const chapters = useSelector((state) => state.chapters.data);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchChapters());

  },[dispatch])
  return (
    <div className=''>
    
        <Search/>
        <div className='flex flex-wrap'>
{chapters.map((chapter)=>{
            return(
              
                <div className='box-content w-56 h-20 m-5 border-2
                 p-5 text-white '  key={chapter.id}>
        <div className='flex flex-row justify-between'>
                  <p>{chapter.name_simple}</p>
                  <p>{chapter.name_arabic}</p>
                  </div>
                  <div>
                    <p>{'verses: '+ chapter.verses_count}</p>
                    <p>{'Revelead in: '+ chapter.revelation_place}</p>

                    <p>{chapter.translated_name.name}</p>
                  </div>

                   
                </div>
            );

        })}
    </div>
        </div>

  )
}

export default Home