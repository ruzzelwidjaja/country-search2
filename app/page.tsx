'use client' // To use Client Side Rendering

import React, { useState, useCallback, useEffect} from 'react';
import { countries_list } from './config/countries_list';
import { Header } from './components/header';
import { SearchInput } from './components/searchInput';
import { SearchButton } from './components/searchButton';
import { CountriesList } from './components/countriesList';
import { WarningMessage } from './components/warningMessage';
import CountryCard from './components/countryCard';


export type CountryData = {
  name: string;
  continent: string;
};


export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([]);
  const [isValid, setIsValid] = useState(true); // valid country or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setInputValue(searchQuery);
  
    // Filter the countries list based on the input
    const searchResults = countries_list.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(searchResults);
  };

  const handleButtonClick = useCallback(async () => { // useCallback to optimize performance and avoid unnecessary re-renders
    // Validation: Check if the input value matches a country in the list
    const isValidCountry = countries_list.some(country => 
        country.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (isValidCountry) {
        console.log('Button Clicked, Submitted value: ', inputValue)
        setIsValid(true);
        setIsModalOpen(true);
        await getCountryByName(inputValue);
    } else {
        setIsValid(false);
        setSelectedCountry({name: 'Unknown', dialCode: 'Unknown', capital: 'Unknown', officialLanguage: 'Unknown', currency: { symbol: 'Unknown', isoCode: 'Unknown',}, twoLetterCode: 'Unknown', Summary: 'Unknown'});
    }
  }, [inputValue]);

  const handleCountryClick = (country: string) => {
    setInputValue(country);
    setFilteredCountries([]);
    setIsValid(true); // to reset validation state when a country is clicked
  }

  // DATABASEEEE
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Unknown', 
    dialCode: 'Unknown', 
    capital: 'Unknown', 
    officialLanguage: 'Unknown', 
    currency: { symbol: 'Unknown', isoCode: 'Unknown',}, 
    twoLetterCode: 'Unknown', 
    Summary: 'Unknown'
  });

  const getCountryByName = async (name: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/countries/${name}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }

      // return res.json();
      const countryData = await res.json();
      setSelectedCountry(countryData.country);
      console.log(countryData.country.name)

    } catch (error) {
      console.log(error);
      setSelectedCountry({name: 'Unknown', dialCode: 'Unknown', capital: 'Unknown', officialLanguage: 'Unknown', currency: { symbol: 'Unknown', isoCode: 'Unknown',}, twoLetterCode: 'Unknown', Summary: 'Unknown'});
    }
  };



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

      {/* <CountryCard 
        name={selectedCountry.name}
        dialCode={selectedCountry.dialCode}
        capital={selectedCountry.capital}
        officialLanguage={selectedCountry.officialLanguage}
        currency={selectedCountry.currency} 
        twoLetterCode={selectedCountry.twoLetterCode} 
        Summary={selectedCountry.Summary}
        /> */}

      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-0 left-0 w-full h-full" onClick={() => setIsModalOpen(false)}></div>
        <div className="relative backdrop-blur-xl shadow-md rounded-lg lg:max-w-2xl mx-auto overflow-hidden w-8/12">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
          <CountryCard
            name={selectedCountry.name}
            dialCode={selectedCountry.dialCode}
            capital={selectedCountry.capital}
            officialLanguage={selectedCountry.officialLanguage}
            currency={selectedCountry.currency}
            twoLetterCode={selectedCountry.twoLetterCode}
            Summary={selectedCountry.Summary}
          />
        </div>
      </div>

    </main>
  );
}