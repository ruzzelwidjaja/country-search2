import React from 'react';

type WarningMessageProps = {
  isValid: boolean;
};

export const WarningMessage: React.FC<WarningMessageProps> = ({ isValid }) => {
  if (!isValid) {
    return <p className="text-red-500 text-sm pl-2 ml-4">Please enter a valid country!</p>;
  }
  return null;
};
