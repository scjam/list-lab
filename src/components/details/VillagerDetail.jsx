import React from 'react';
import PropTypes from 'prop-types';

const VillagerDetail = ({ image, name, quote, birthday }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{birthday}</p>
    </figcaption>
  </figure>
);

VillagerDetail.propTypes = {
  _id: PropTypes.string._id,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired
};

export default VillagerDetail;
