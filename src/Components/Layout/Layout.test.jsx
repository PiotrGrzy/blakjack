import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '.';

const MockedComponent = () => <div>Test</div>;

describe('Layout', () => {
  it('Renders all required components', () => {
    render(
      <Layout>
        <MockedComponent />
      </Layout>
    );

    expect(screen.getByText('BlackJack')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Created by PG')).toBeInTheDocument();
  });
});
