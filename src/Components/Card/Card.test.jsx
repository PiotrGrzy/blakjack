import React from 'react';
import { Card } from 'Components/Card';
import backface from 'assets/backface.png';
import { render, screen } from '@testing-library/react';

const mockedProps = {
  image: 'https://deckofcardsapi.com/static/img/JS.png',
  code: 'JS',
};

describe('Card component', () => {
  it('renders correctly card image', () => {
    render(<Card image={mockedProps.image} code={mockedProps.code} />);
    expect(screen.getByAltText(mockedProps.code)).toHaveAttribute(
      'src',
      mockedProps.image
    );
  });
  it('renders correctly backface image', () => {
    render(<Card image={mockedProps.image} code={mockedProps.code} />);
    expect(screen.getByAltText('cart backface')).toHaveAttribute(
      'src',
      backface
    );
  });
});
