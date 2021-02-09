import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VillagerById from './VillagerById';
import { BrowserRouter } from 'react-router-dom';

describe('VillagerById container', () => {
  it('displays information about a villager', async() => {
    render(
      <BrowserRouter>
        <VillagerById match={{ params: { _id: '5f5fb4bbbfd05c2aed82e460' } }}/>
      </BrowserRouter>
    );

    screen.getByText('Loading');

    const ul = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
