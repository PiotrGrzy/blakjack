import React from 'react';
import { render, fireEvent, screen } from 'Utils/testUtils/test-utils';

import { playerMock } from './playerMock';
import { Player } from '.';

describe('Player component', () => {
  it('renders correctly', async () => {
    render(<Player player={playerMock} />);

    fireEvent.click(screen.getByText('Hit'));
    expect(screen.getAllByAltText('cart backface')).toHaveLength(2);
  });
});
