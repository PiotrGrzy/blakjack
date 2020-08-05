import React from 'react';
import styled from 'styled-components';
import { Footer } from 'Components/Footer';
import { Navbar } from 'Components/Navbar';

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
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
