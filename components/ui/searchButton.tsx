import React, { memo } from 'react';

type searchButtonProps = {
  handleButtonClick: () => void;
};

export const SearchButton: React.FC<searchButtonProps> = memo(({ handleButtonClick }) => { // use memo to prevent the search buttom from being re-rendered uncessarily 
  return (
    <button 
      type="button" 
      className="shadow-2xl w-24 ml-2 px-2 py-1.5 bg-indigo-500 text-primary-foreground p-2 rounded-md hover:bg-indigo-400 font-bold"
      onClick={handleButtonClick}
    >
      Go
    </button>
  );
});