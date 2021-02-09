import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, quote, birthday }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{birthday}</p>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};

export default Villager;

