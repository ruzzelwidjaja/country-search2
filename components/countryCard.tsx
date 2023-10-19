import React, { useEffect, useState } from 'react';
import { comfortaa, baloo_da_2 } from '../styles/fonts';
import { useTheme } from 'next-themes';



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
    
    // Dark Mode
    const { resolvedTheme } = useTheme();  // Get the current theme

    // State variables for icon sources
    const [capitalIcon, setCapitalIcon] = useState('icons/card/capital.svg');
    const [languageIcon, setLanguageIcon] = useState('icons/card/language.svg');
    const [phoneIcon, setPhoneIcon] = useState('icons/card/phone.svg');
    const [currencyIcon, setCurrencyIcon] = useState('icons/card/currency.svg');

    useEffect(() => { // useEffect updates the icon source state variables whenever 'resolvedTheme' changes
        // Update icon sources based on the resolved theme
        setCapitalIcon(resolvedTheme === 'dark' ? 'icons/card/capital-light.svg' : 'icons/card/capital.svg');
        setLanguageIcon(resolvedTheme === 'dark' ? 'icons/card/language-light.svg' : 'icons/card/language.svg');
        setPhoneIcon(resolvedTheme === 'dark' ? 'icons/card/phone-light.svg' : 'icons/card/phone.svg');
        setCurrencyIcon(resolvedTheme === 'dark' ? 'icons/card/currency-light.svg' : 'icons/card/currency.svg');
      }, [resolvedTheme]);

    return (
        <div className={`${baloo_da_2.className} shadow-md rounded-lg lg:max-w-2xl mx-auto overflow-hidden w-full px-2 py-2`}>
        <div className="p-4">

            {/* Heading */}
            <div className="flex justify-between items-center pl-2">
            <div className='flex items-center'>
                <img src={`https://flagsapi.com/${twoLetterCode}/flat/64.png`}/>
                
                <h2 className="pl-5 text-4xl font-semibold text-cardText">{name ?? 'No Name'}</h2>
            </div>
            </div>

            <hr className="mt-2 mb-4" /> {/* horizontal line  */} 

            {/* Body (Country Details) */}
            <div className='flex flex-col w-full px-2'>
                <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-0'>
                    
                    {/* Left Side Content */}
                    <div className='flex flex-1 flex-col mb-4 sm:mb-0 sm:pr-2'>
                        {/* Capital */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src={capitalIcon} alt="Capital Icon" className="h-5 w-5 mr-2" />
                                <p className="text-primary pl-0.5 text-lg">Capital</p>
                            </div>
                            <p className="text-cardText font-semibold text-lg">{capital ?? 'No Capital'}</p>
                        </div>
                        
                        {/* Language */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={languageIcon} alt="Language Icon" className="h-5 w-5 mr-2" />
                                <p className="text-primary pl-0.5 text-lg">Language</p>
                            </div>
                            <p className="text-cardText font-semibold text-lg">{officialLanguage ?? 'No Language'}</p>
                        </div>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="hidden sm:block h-auto bg-gray-200 mx-1 w-px self-stretch"></div>
                    
                    {/* Right Side Content */}
                    <div className='flex flex-1 flex-col sm:pl-2'>
                        {/* Dial Code */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5 mr-2" />
                                <p className="text-primary pl-0.5 text-lg">Dial Code</p>
                            </div>
                            <p className="text-cardText font-semibold text-lg">{dialCode ?? 'No Dial Code'}</p>
                        </div>
                        
                        {/* Currency */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={currencyIcon} alt="Currency Icon" className="h-5 w-5 mr-2" />
                                <p className="text-primary pl-0.5 text-lg">Currency</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className="text-cardText font-semibold text-lg">{currency?.symbol ?? 'Symbol' }</p>
                                <p className="text-cardText font-semibold pl-1 text-lg">{currency?.isoCode ?? 'No Iso Code' }</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* end of Body  */} 

            <hr className="my-4" />  {/* horizontal line  */} 

            {/* Summary */}
            <div className='px-2'>
                <div className="mb-1">
                    <h3 className="text-xl font-semibold text-cardText">A Glimpse into {name}</h3>
                </div>

                <div className="mb-2">
                    <p className="text-primary">{Summary}</p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default CountryCard;
