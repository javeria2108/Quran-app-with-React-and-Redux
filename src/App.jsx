import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='font-serif grid sm:flex flex-col '>
     <NavBar/>
     <Home/>
     </div>
    </>
  );
}

export default App;
