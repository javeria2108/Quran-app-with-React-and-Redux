import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchChaptersQuery } from '../redux/features/chapters/chaptersApi';

const Search = () => {
  const { data: chaptersData = {}, error, isLoading } = useFetchChaptersQuery();
  const [chapters, setChapters] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (chaptersData && chaptersData.chapters) {
      setChapters(chaptersData.chapters);
    }
  }, [chaptersData]);

  const filteredData = chapters.filter(
    chapter => chapter.name_simple.toLowerCase().includes(inputText.toLowerCase())
  );

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/verses/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex flex-col items-center max-w-md mx-auto'>
      <input
        className='mt-20 mb-3 w-80 px-8 py-3 rounded-full lg:w-120 lg:py-5 bg-grey-l text-dark-grey
          placeholder-grey-bg focus:outline-none focus:border-green-bg' 
        type="text"
        placeholder='What do you want to read?'
        onChange={inputHandler}
      />
      <div className="w-60 py-1 text-sm bg-green-bg text-white rounded-md shadow-lg">
        {inputText && filteredData.map((chapter) => {
          return (
            <div
              className='flex flex-row justify-between px-4 hover:cursor-pointer' 
              onClick={() => handleClick(chapter.id)}
              key={chapter.id}
            >
              <p>{chapter.name_simple}</p>
              <p>{chapter.name_arabic}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
