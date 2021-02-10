import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagersByIdResponse from '../fixtures/villagerById.json';
import VillagerById from './VillagerById';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e465', 
    (req, res, ctx) => {
      return res(ctx.json(villagersByIdResponse));
    })
);

describe('VillagerById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('displays a loading screen then fetches a villagers details', async() => {
    render(
      <VillagerById match={{ params: { _id: '5f5fb4bbbfd05c2aed82e465' } }} />
    );

    screen.getByAltText('Loading');

    return waitFor(() => {
      screen.getByText('Alice');
    });
  });
});
