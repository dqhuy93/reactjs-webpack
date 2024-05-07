import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

// Create a new context
const AppContext = createContext({
  value: false
});

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Define the state or values you want to share
  const [value, setValue] = useState({
    value: false
  });

  useEffect(() => {}, []);

  return <AppContext.Provider value={{ value: false }}>{children}</AppContext.Provider>;
};

// Custom hook to consume the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a MyProvider');
  }
  return context;
};
