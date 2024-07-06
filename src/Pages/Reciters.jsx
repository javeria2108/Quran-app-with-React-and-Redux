
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetchRecitersListQuery } from '../redux/features/reciters/recitersApi';
import { setReciterId } from '../redux/features/reciterIdSlice';

export const Reciters = () => {
  const { data: recitersData = {}, error, isLoading } = useFetchRecitersListQuery();
  const [reciters, setReciters] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (recitersData && recitersData.reciters) {
      setReciters(recitersData.reciters);
    }
  }, [recitersData]);

  const handleClick = (id) => {
    dispatch(setReciterId(id));
    navigate('/player/1');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex flex-col mx-8 mb-4 p-2 justify-center items-start min-h-screen">
        <h1 className="text-light-green mb-2 text-xl sm:text-2xl">Choose Reciter:</h1>
        {error && <p className="text-red-500">{error}</p>}
        {reciters && reciters.map((reciter) => (
          <div key={reciter.id} className="">
            <p
              className="text-white text-xl hover:text-slate-400 hover:underline p-1 sm:text-2xl"
              onClick={() => handleClick(reciter.id)}
            >
              {reciter.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
