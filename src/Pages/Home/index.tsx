import React from 'react';
import { Layout } from 'Components/Layout';
import { TextLink } from 'Components/TextLink';
import { Heading, SubHeading } from 'Styles/components';

export const Home: React.FC = () => {
  return (
    <section>
      <Layout>
        <Heading>Welcome to BlackJack v.1.0.0</Heading>
        <SubHeading>
          Project created using React, Typescript, Styled Components and more.
        </SubHeading>
        <TextLink to="/options">Start BlackJack!</TextLink>
      </Layout>
    </section>
  );
};
