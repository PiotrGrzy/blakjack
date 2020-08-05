import React from 'react';
import { Layout } from 'Components/Layout';
import { TextLink } from 'Components/TextLink';

export const Home: React.FC = () => {
  return (
    <section>
      <Layout>
        <h1>Welcome to BlackJack Pro v.1.0.0</h1>
        <TextLink to="/game">Start BlackJack!</TextLink>
      </Layout>
    </section>
  );
};
