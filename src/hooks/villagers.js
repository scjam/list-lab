import { useState, useEffect } from 'react';
import { findVillagerById, findVillagers } from '../services/animalCrossingApi';

export const useVillagers = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers]  = useState([]);

  useEffect(() => {
    findVillagers()
      .then(villagers => {
        setVillagers(villagers);
        setLoading(false);
      });
  }, []);


  return {
    loading,
    villagers
  };
};

export const useVillagerById = _id => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState(null);

  useEffect(() => {
    findVillagerById(_id)
      .then(villager => {
        setVillager(villager);
        setLoading(false);
      });
  }, [_id]);

  return {
    loading,
    villager
  };
};
