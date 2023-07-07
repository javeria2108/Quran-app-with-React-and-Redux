import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full h-64 sm:h-80 bg-green-bg'>
  <footer className=" text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-lg font-bold">Your App Name</h2>
          <p className="mt-2">A brief description of your app.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="mt-2">
            <li>
              <a className="text-gray-400 hover:text-white" href="#home">Home</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#about">About</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer