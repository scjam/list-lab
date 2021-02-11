import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../components/villagers/Villager';
import Loading from '../components/loading/Loading';
import { useVillagerById } from '../hooks/villagers';

const VillagerById = ({ match }) => {
  const { loading, villager } = useVillagerById(match.params._id);

  if(loading) return <Loading />;
  return <Villager {...villager} />;
};

VillagerById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default VillagerById;
