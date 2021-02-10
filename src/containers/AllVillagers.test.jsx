import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagersApiResponse from '../fixtures/villagers.json';
import AllVillagers from './AllVillagers';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(villagersApiResponse));
  })
);

describe('AllVillagers container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading screen then fetches a list of villagers ', async() => {
    render(
      <MemoryRouter>
        <AllVillagers />
      </MemoryRouter>
    );

    screen.getByAltText('Loading');

    const listOfVillagers = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(listOfVillagers).not.toBeEmptyDOMElement();
    });
  });
});
