import React from 'react';


interface CountryCardProps {
    name: string | null;
    dialCode: string | null;
    capital: string | null;
    officialLanguage: string | null;
    currency: {
        symbol: string | null;
        isoCode: string | null;
    } | null;
    twoLetterCode: string | null;
    Summary: string | null;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, dialCode, capital, officialLanguage, currency, twoLetterCode, Summary }) => {
  return (
    <div className="shadow-md rounded-lg lg:max-w-2xl mx-auto overflow-hidden w-8/12 px-2 py-2">
      <div className="p-4">

        {/* Heading */}
        <div className="flex justify-between items-center pl-2">
          <div className='flex items-center'>
            <img src={`https://flagsapi.com/${twoLetterCode}/flat/64.png`}/>
            
            <h2 className="pl-4 text-3xl font-semibold text-indigo-500">{name ?? 'No Name'}</h2>
          </div>
        </div>

        <hr className="mt-2 mb-4" />

        {/* Body */}
        <div className='flex flex-col w-full px-2'>
            <div className='flex flex-row justify-between'>
                
                {/* Left Side Content */}
                <div className='flex flex-1 flex-col pr-3'>
                    {/* Capital */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src="icons/card/capital.png" alt="Capital Icon" className="h-5 w-5 mr-2" />
                            <p className="text-black pl-0.5">Capital</p>
                        </div>
                        <p className="text-indigo-500 font-semibold">{capital ?? 'No Capital'}</p>
                    </div>
                    
                    {/* Language */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="icons/card/language.png" alt="Language Icon" className="h-5 w-5 mr-2" />
                            <p className="text-black pl-0.5">Language</p>
                        </div>
                        <p className="text-indigo-500 font-semibold">{officialLanguage ?? 'No Language'}</p>
                    </div>
                </div>
                
                {/* Vertical Line */}
                <div className="h-auto bg-gray-200 mx-1 w-px self-stretch"></div>
                
                {/* Right Side Content */}
                <div className='flex flex-1 flex-col pl-3'>
                    {/* Dial Code */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src="icons/card/phone.png" alt="Phone Icon" className="h-5 w-5 mr-2" />
                            <p className="text-black pl-0.5">Dial Code</p>
                        </div>
                        <p className="text-indigo-500 font-semibold">{dialCode ?? 'No Dial Code'}</p>
                    </div>
                    
                    {/* Currency */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="icons/card/currency.png" alt="Currency Icon" className="h-5 w-5 mr-2" />
                            <p className="text-black pl-0.5">Currency</p>
                        </div>
                        <div className='flex flex-row'>
                            <p className="text-indigo-500 font-semibold">{currency?.symbol ?? 'Symbol' }</p>
                            <p className="text-indigo-500 font-semibold pl-1">{currency?.isoCode ?? 'No Iso Code' }</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        {/* end of Body  */} 

        <hr className="my-4" />

        {/* Summary */}
        <div className='px-2'>
            <div className="mb-1">
                <h3 className="text-lg font-semibold text-indigo-500">A Glimpse into {name}</h3>
            </div>

            <div className="mb-2">
                <p className="text-gray-700">{Summary}</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default CountryCard;
