import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 5px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; {new Date().getFullYear()}</span>;
      <span>Created by PG</span>
    </FooterContainer>
  );
};
