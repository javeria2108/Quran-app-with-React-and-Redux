import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRecitersList } from '../redux/thunk/fetchRecitersList';
import { setReciterId } from '../redux/actions';

export const Reciters = () => {
  const dispatch = useDispatch();
  const recitersState = useSelector((state) => state.reciters);
  const { reciters, error } = recitersState;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRecitersList());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(setReciterId(id));
    navigate('/player/1');
  };

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
