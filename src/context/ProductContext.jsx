import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [color, setColor] = useState('#2e2e2c');
  const [scale, setScale] = useState('0.08');

  return (
    <ProductContext.Provider value={{ color, setColor, scale, setScale }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
