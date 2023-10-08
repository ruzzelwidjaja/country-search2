'use client' // To use Client Side Rendering

import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import { state } from '@/store';
import { countries_list } from './countries_list';
import { Comfortaa, Baloo_Da_2 } from 'next/font/google';

// Font
const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: '400',
})

const baloo_da_2 = Baloo_Da_2({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',

})

// Define type for the country data
type CountryData = {
  name: string;
  continent: string;
};

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([]);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setInputValue(searchQuery);
  
    // Filter the countries list based on the input
    const searchResults = countries_list.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(searchResults);
  };

  const handleButtonClick = () => {
    // Validation: Check if the input value matches a country in the list
    const isValidCountry = countries_list.some(country => 
      country.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (isValidCountry) {
      console.log('Button Clicked, Submitted value: ', inputValue)
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }

  const handleCountryClick = (country: string) => {
    setInputValue(country);
    setFilteredCountries([]);
    setIsValid(true); // to reset validation state when a country is clicked
  }

  return (

    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/crystal-blurred.jpg')] bg-cover bg-center h-screen">
      <h1 className={`${baloo_da_2.className} text-7xl text-black mb-8`}>Country Search</h1>
      <form className="w-96 flex flex-col relative">
        <div className="flex mb-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`shadow-lg w-full p-2 border-2 rounded-md pl-10 bg-gray-200 placeholder-gray-500 focus:border-3 focus:bg focus:outline-none text-black ${!isValid ? 'border-red-500' : 'focus:border-indigo-500 focus:border-3'}`}
            placeholder="Search for a country"
            style={{ backgroundImage: 'url(/search-icon.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '7px center', backgroundSize: '9%' }}
          />
          <button 
            type="button" 
            className="shadow-lg w-24 ml-2 px-2 py-1.5 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-400 font-bold"
            onClick={handleButtonClick}
          >
            Go
          </button>
        </div>
        {/* Display the filtered countries */}
        <ul className="pl text-black shadow-lg rounded-md max-h-60 overflow-y-auto absolute w-full z-10 top-full">
          {filteredCountries.map((country, index) => (
            <li 
              key={index} 
              className="p-2 pl-11 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCountryClick(country.name)}
              style={{ 
                backgroundImage: `url(/continents/${country.continent}.svg)`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: '7px center', 
                backgroundSize: '7%' }}
            >
              {country.name}
            </li>
          ))}
        </ul>
        {/* Conditionally render the warning message if country is not valid */}
        {!isValid && <p className="text-red-500 text-sm pl-2 pb-2">Please enter a valid country!</p>}
      </form>
    </main>
  )

}
