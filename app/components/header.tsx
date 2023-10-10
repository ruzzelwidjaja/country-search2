import React from 'react';
import { comfortaa, baloo_da_2 } from '../styles/fonts';

export const Header: React.FC = () => {
  return (
    <h1 className={`${baloo_da_2.className} text-7xl text-black mb-8 text-center`}>Country Search</h1>
  );
};