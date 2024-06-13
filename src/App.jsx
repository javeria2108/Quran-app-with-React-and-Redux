import Home from "./Components/Home";
import { Verses } from "./Pages/Verses";
import {Routes, Route } from 'react-router-dom';
import {QuranAudioPlayer} from "./Pages/AudioPlayer";
import Languages from "./Pages/Languages";
import Translations from "./Pages/Translations";
import { Reciters } from "./Pages/Reciters";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import { FeedbackForm } from "./Pages/FeedbackForm";
import Footer from "./Components/Footer";
import Auth from "./Pages/Auth";
import Favourites from "./Pages/Favourites";
import Notes from "./Pages/Notes";
import Login from "./Pages/Login";
function App() {

  return (
    <>
    <Layout>
    <div className='font-serif  '>
    
    
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/verses/:id" element={<Verses />} />
        <Route path="/player/:id" element={<QuranAudioPlayer/>} />
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/reciters/:chapterId" element={<Reciters/>}/>
        <Route path="/translations/:name" element={<Translations/>}/>
        <Route path="/feedback" element={<FeedbackForm/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
     </div>
     </Layout>
     <Footer/>
    </>
  );
}

export default App;
