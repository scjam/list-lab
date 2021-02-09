import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers container', () => {
  it('displays a loading screen then a list of villagers ', async() => {
    render(<AllVillagers />);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
