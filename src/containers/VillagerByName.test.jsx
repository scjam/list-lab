import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VillagerByName from './VillagerByName';

describe('VillagerByName container', () => {
  it('displays information about a villager', async() => {
    render(<VillagerByName match={{ params: { name: 'Admiral' } }}/>);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
