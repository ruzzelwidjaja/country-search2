// // components/CountriesList.tsx
// import React from 'react';
// import { CountryData } from '../app/page';

// type CountriesListProps = {
//   filteredCountries: CountryData[];
//   handleCountryClick: (country: string) => void;
// };

// export const CountriesList: React.FC<CountriesListProps> = ({ filteredCountries, handleCountryClick }) => {
//   return (
//     <ul className="pl text-primary shadow-lg rounded-md max-h-60 overflow-y-auto absolute w-full z-10 top-full">
//       {filteredCountries.map((country) => (
//         <li 
//           key={country.name} 
//           className="p-2 pl-11 hover:bg-indigo-400 cursor-pointer"
//           onClick={() => handleCountryClick(country.name)}
//           style={{ 
//             backgroundImage: `url(icons/continents/${country.continent}.svg)`, 
//             backgroundRepeat: 'no-repeat', 
//             backgroundPosition: '7px center', 
//             backgroundSize: '7%' }}
//         >
//           {country.name}
//         </li>
//       ))}
//     </ul>
//   );
// };

// components/CountriesList.tsx
import React from 'react';
import { CountryData } from '../app/page';

type CountriesListProps = {
  filteredCountries: CountryData[];
  handleCountryClick: (country: string) => void;
};

export const CountriesList: React.FC<CountriesListProps> = ({ filteredCountries, handleCountryClick }) => {
  return (
    <ul className=" pl text-primary shadow-lg rounded-md max-h-60 overflow-y-auto absolute w-full z-10 top-full">
      {filteredCountries.map((country) => (
        <li 
          key={country.name} 
          className="relative p-2 pl-11 hover:bg-listHover cursor-pointer"
          onClick={() => handleCountryClick(country.name)}
        >
          {/* Icon for Light Mode */}
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 dark:hidden">
            <img src={`icons/continents/${country.continent}.svg`} alt={`${country.continent} icon`} className="w-6 h-6" />
          </span>

          {/* Icon for Dark Mode */}
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 hidden dark:inline">
            <img src={`icons/continents/${country.continent}-light.svg`} alt={`${country.continent} icon`} className="w-6 h-6" />
          </span>

          {country.name}
        </li>
      ))}
    </ul>
  );
};
