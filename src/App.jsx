import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Verses } from "./Components/Verses";
import {Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='font-serif grid sm:flex flex-col '>
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/verses/:id" element={<Verses />} />
      </Routes>
      
     </div>
    </>
  );
}

export default App;
