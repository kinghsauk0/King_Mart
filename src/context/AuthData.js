// AuthDataContext.js

import React, { createContext, useContext, useState } from 'react';

export const AuthDataContext = createContext({
  arryOfData: [],
  addData: () => {},
});

export const AuthDataProvider = ({ children }) => {
  const [arryOfData, setArryOfData] = useState([]);

  const addData = (newData) => {
    setArryOfData((prevData) => [...prevData, newData])
  };

  return (
    <AuthDataContext.Provider value={{ arryOfData, addData }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export const useAuthData = () => {
  return useContext(AuthDataContext);
};
