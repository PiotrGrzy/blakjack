import React from 'react';
import { Cards } from 'Components/Cards';
import { render, screen } from '@testing-library/react';

const mockedCards = [
  { image: 'image1.jpg', code: 'AS', id: '1' },
  { image: 'image2.jpg', code: 'AS', id: '2' },
  { image: 'image3.jpg', code: 'AS', id: '3' },
];

describe('Cards component', () => {
  it('renders all cards', () => {
    render(<Cards cards={mockedCards} />);
    expect(screen.getAllByRole('img')).toHaveLength(6);
  });
});
