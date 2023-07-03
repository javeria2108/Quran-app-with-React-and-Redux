import { useState } from "react";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='font-serif display-grid sm:display-flex flex-col '>
     <NavBar/>
     <Search/>
     </div>
    </>
  );
}

export default App;
