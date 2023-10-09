import React from 'react';

// interface CountryCardProps {
//   name: String,
//   dialCode: String,
//   capital: String,
//   officialLanguage: String,
//   currency: {
//     symbol: String,
//     isoCode: String,
//   }

// }

interface CountryCardProps {
    name: string | null;
    dialCode: string | null;
    capital: string | null;
    officialLanguage: string | null;
    currency: {
        symbol: string | null;
        isoCode: string | null;
    } | null;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, dialCode, capital, officialLanguage, currency }) => {
  return (
    <div className="shadow-md rounded-lg max-w-sm overflow-hidden w-full">
      <div className="p-4">

        {/* Heading */}
        <div className="flex justify-between items-center">
          <div className='flex items-center'>
            <p className="text-sm text-gray-600">{dialCode ? `${dialCode}` : 'No Dial Code'}</p>
            <h2 className="pl-2 text-xl font-semibold text-indigo-500">{name ?? 'No Name'}</h2>
          </div>
          <p className="text-gray-800">FLAG</p>
        </div>

        <hr className="my-4" />

        {/* Body */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <p className="text-gray-500">Capital</p>
          </div>
          <p className="text-gray-800">{capital ?? 'No Capital'}</p>
        </div>
        
        {/* Add more details similarly */}
      </div>
    </div>
  );
};

export default CountryCard;
