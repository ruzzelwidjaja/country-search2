// import React from 'react';

// type searchInputProps = {
//   inputValue: string;
//   isValid: boolean;
//   handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// export const SearchInput: React.FC<searchInputProps> = ({ inputValue, isValid, handleInputChange }) => {
//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={handleInputChange}
//       className={`text-primary shadow-lg w-full p-2 rounded-md pl-10 bg-[var(--input-bg-color)] placeholder-indigo-400 
//                   border border-input focus:border-indigo-500 focus:outline-none border-2
//                   hover:border-indigo-500
//                   ${!isValid && 'border-red-500'}`
//                 }
//       placeholder="Search for a country"
//       style={{ 
//         backgroundImage: 'url(/search-icon.svg)', 
//         backgroundRepeat: 'no-repeat', 
//         backgroundPosition: '7px center', 
//         backgroundSize: '9%' 
//       }}
//     />
//   );
// };

import React from 'react';

type searchInputProps = {
  inputValue: string;
  isValid: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<searchInputProps> = ({ inputValue, isValid, handleInputChange }) => {
  return (
    <div className="relative w-full">
      {/* Icon for Light Mode */}
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 dark:hidden">
        <img src="icons/search/search-icon.svg" alt="search icon" className="w-6 h-6" />
      </span>

      {/* Icon for Dark Mode */}
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 hidden dark:inline">
        <img src="icons/search/search-icon-light.svg" alt="search icon" className="w-6 h-6" />
      </span>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`text-primary shadow-lg w-full p-2 rounded-md pl-11 bg-[var(--input-bg-color)] placeholder-indigo-400 
                    border border-input focus:border-indigo-500 focus:outline-none border-2
                    hover:border-indigo-500
                    ${!isValid && 'border-red-500'}`}
        placeholder="Search for a country"
      />
    </div>
  );
};
