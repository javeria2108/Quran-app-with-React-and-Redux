import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Verses } from "./Components/Verses";
import {Routes, Route } from 'react-router-dom';
import { QuranAudioPlayer } from "./Components/AudioPlayer";
function App() {

  return (
    <>
    <div className='font-serif grid sm:flex flex-col '>
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/verses/:id" element={<Verses />} />
        <Route path="/player/:id" element={<QuranAudioPlayer/>} />
      </Routes>
      
     </div>
    </>
  );
}

export default App;
