import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers } from '../services/animalCrossingApi';

export default class AllVillagers extends Component {
  state = {
    loading: true,
    villagers: []
  };

  async componentDidMount() {
    const villagers = await findVillagers();
    this.setState({
      loading: false,
      villagers,
    });
  }
  
  render() {
    const { loading, villagers } = this.state;

    if(loading) return <h1>Loading</h1>;

    return <VillagerList villagers={villagers} />;
  }
}
