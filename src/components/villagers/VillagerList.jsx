import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map((villager) => (
    <li key={villager._id}>
      <Link to={`/${villager._id}`}>
        <Villager image={villager.image} name={villager.name} />
      </Link>
    </li>
  ));

  return <ul data-testid="villagers">{villagerElements}</ul>;
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default VillagerList;
