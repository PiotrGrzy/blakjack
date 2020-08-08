import React from 'react';
import styled from 'styled-components';
import { Footer } from 'Components/Footer';
import { Navbar } from 'Components/Navbar';
import { Container } from 'Styles/components';

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = styled(Container)`
  justify-content: space-between;
  min-height: 100vh;
`;

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};
