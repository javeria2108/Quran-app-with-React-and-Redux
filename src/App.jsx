import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Verses } from "./Pages/Verses";
import {Routes, Route } from 'react-router-dom';
import {QuranAudioPlayer} from "./Pages/AudioPlayer";
import Languages from "./Pages/Languages";
import Translations from "./Pages/Translations";
import { Reciters } from "./Pages/Reciters";
import Layout from "./Components/Layout";
function App() {

  return (
    <>
    <Layout>
    <div className='font-serif  '>
    
    
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/verses/:id" element={<Verses />} />
        <Route path="/player/:id" element={<QuranAudioPlayer/>} />
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/reciters/:chapterId" element={<Reciters/>}/>
        <Route path="/translations/:name" element={<Translations/>}/>
      </Routes>
      
     </div>
     </Layout>
    </>
  );
}

export default App;
