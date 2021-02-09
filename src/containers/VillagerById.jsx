import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findVillagerById } from '../services/animalCrossingApi';
import VillagerList from '../components/villagers/VillagerList';

export default class VillagerById extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    loading: true,
    villagers: []
  };

  async componentDidMount() {
    const { match } = this.props;

    const villagers = await findVillagerById(match.params._id);
    this.setState({ loading: false, villagers });
  }

  render() {
    const { loading, villagers } = this.state;
    if(loading) return <h1>Loading</h1>;

    return <VillagerList villagers={villagers} />;
  }
}
