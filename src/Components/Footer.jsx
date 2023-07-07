import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate();
    const home=()=>{navigate('/')}
    const player=()=>{navigate('/player/1')}
    const verses=()=>{navigate('/verses/1')}
    const about=()=>{navigate('/about')}
    const translation=()=>{navigate('/languages')}

  return (
    <div className="bg-green-bg">
      <footer className="text-white py-8 px-8">
        <div className="container mx-auto flex flex-row justify-between">
          <div className="mr-36 sm:mr-48 md:mr-120">
            <h2 className="text-xl mt-6 font-bold">QuranWorld</h2>
            <p className="mt-2">Read your favourite translations and <br/> listen to your 
              favourite reciters! </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center">
            
            <ul className="mt-2 sm:ml-8 mr-5">
            <h3 className="text-lg mt-6 font-bold">Links</h3>
              <li>
                <p className="text-slate-950 hover:text-white" onClick={home}>Home</p>
              </li>
              <li>
                <p className="text-slate-950 hover:text-white" onClick={about}>About</p>
              </li>
              <li>
                <p className="text-slate-950 hover:text-white" onClick={verses}>Read Quran</p>
              </li>
              <li>
                <p className="text-slate-950 hover:text-white" onClick={player}>Play audio</p>
              </li>
              <li>
                <p className="text-slate-950 hover:text-white" onClick={translation}>Translation settings</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
