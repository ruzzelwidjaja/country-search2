'use client' // To use Client Side Rendering

import React, { useState, useCallback } from 'react';
import { countries_list } from './config/countries_list';
import { Header } from './components/header';
import { SearchInput } from './components/searchInput';
import { SearchButton } from './components/searchButton';
import { CountriesList } from './components/countriesList';
import { WarningMessage } from './components/warningMessage';

export type CountryData = {
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

  // const handleButtonClick = () => {
  //   // Validation: Check if the input value matches a country in the list
  //   const isValidCountry = countries_list.some(country => 
  //     country.name.toLowerCase() === inputValue.toLowerCase()
  //   );

  //   if (isValidCountry) {
  //     console.log('Button Clicked, Submitted value: ', inputValue)
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // }

  const handleButtonClick = useCallback(() => { // useCallback to optimize performance and avoid unnecessary re-renders
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
  }, [inputValue]);

  const handleCountryClick = (country: string) => {
    setInputValue(country);
    setFilteredCountries([]);
    setIsValid(true); // to reset validation state when a country is clicked
  }
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/background_images/crystal-blurred.jpg')] bg-cover bg-center h-screen">
      <Header />
      <form className="w-96 flex flex-col relative">
        <div className="flex mb-2">
          <SearchInput inputValue={inputValue} isValid={isValid} handleInputChange={handleInputChange} />
          <SearchButton handleButtonClick={handleButtonClick} />
        </div>
        <CountriesList filteredCountries={filteredCountries} handleCountryClick={handleCountryClick} />
        <WarningMessage isValid={isValid} />
      </form>
    </main>
  );
}