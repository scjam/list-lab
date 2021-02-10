import React from 'react';
import Loading from '../components/loading/Loading';
import VillagerList from '../components/villagers/VillagerList';
import { useVillagers } from '../hooks/villagers';

const AllVillagers = () => {
  const { loading, villagers } = useVillagers();

  if(loading) return <Loading />;
  return <VillagerList villagers={villagers} />;
};

export default AllVillagers;
