'use client' // To use Client Side Rendering

import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (

    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/crystal-blurred.jpg')] bg-cover bg-center h-screen">
      <h1 className="text-7xl font-bold text-black mb-8">Country Quest</h1>
      {/* <img src={'/crystal.jpg'} alt="Image"/> */}
      <form className="w-96 flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="shadow-lg w-full p-2 border-2 rounded-md pl-10 bg-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:border-3 focus:bg focus:outline-none text-black"
          placeholder="Search for a country"
          style={{ backgroundImage: 'url(/search-icon.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '7px center', backgroundSize:'9%'}}
        />
        <button type="submit" className="shadow-lg w-24 ml-2 px-2 py-1.5 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-400 font-bold">
          Go
        </button>
      </form>
    </main>
  )

}
