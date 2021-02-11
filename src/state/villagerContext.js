import React, { createContext, useContext } from 'react';
import Loading from '../components/loading/Loading';
import { useACVillagers } from '../hooks/villagers';

const villagerContext = createContext(null);

export const VillagerProvider = ({ children }) => {
  const { loading, villagers } = useACVillagers();

  return (
    <villagerContext.Provider value={{ villagers }}>
      {loading ? <Loading /> : children}
    </villagerContext.Provider>
  );
};

export const useVillagers = () => {
  const { villagers } = useContext(villagerContext);
  return villagers;
};
