import React from 'react';

const Footer = () => {
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
            
            <ul className="mt-2 sm:ml-8">
            <h3 className="text-lg mt-6 font-bold">Links</h3>
              <li>
                <a className="text-slate-950 hover:text-white" href="/">Home</a>
              </li>
              <li>
                <a className="text-slate-950 hover:text-white" href="/About">About</a>
              </li>
              <li>
                <a className="text-slate-950 hover:text-white" href="/verses/1">Read Quran</a>
              </li>
              <li>
                <a className="text-slate-950 hover:text-white" href="/player/1">Play audio</a>
              </li>
              <li>
                <a className="text-slate-950 hover:text-white" href="/languages">Translation settings</a>
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
