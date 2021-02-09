/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Villager from '../components/villagers/Villager';
import { findVillagerById } from '../services/animalCrossingApi';

const VillagerById = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);

  useEffect(() => {
    findVillagerById(match.params._id).then((villager) => {
      setVillager(villager);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Villager {...villager} />;
};

export default VillagerById;
