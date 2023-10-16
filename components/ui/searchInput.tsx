import React from 'react';

type searchInputProps = {
  inputValue: string;
  isValid: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<searchInputProps> = ({ inputValue, isValid, handleInputChange }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className={`text-black shadow-lg w-full p-2 rounded-md pl-10 bg-gray-200 placeholder-indigo-400 
                  border border-transparent focus:border-indigo-500 focus:outline-none border-2
                  transition-all duration-[50ms]
                  ${!isValid && 'border-red-500'}`
                }
      placeholder="Search for a country"
      style={{ 
        backgroundImage: 'url(/search-icon.svg)', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: '7px center', 
        backgroundSize: '9%' 
      }}
    />
  );
};