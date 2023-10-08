// components/CountriesList.tsx
import React from 'react';
import { CountryData } from '../page';

type CountriesListProps = {
  filteredCountries: CountryData[];
  handleCountryClick: (country: string) => void;
};

export const CountriesList: React.FC<CountriesListProps> = ({ filteredCountries, handleCountryClick }) => {
  return (
    <ul className="pl text-black shadow-lg rounded-md max-h-60 overflow-y-auto absolute w-full z-10 top-full">
      {filteredCountries.map((country) => (
        <li 
          key={country.name} 
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
  );
};