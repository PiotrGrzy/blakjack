import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  box-shadow: 0 5px 15px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const Neon = styled.div`
  position: relative;
  overflow: hidden;
  filter: brightness(200%);
`;

const Text = styled.span`
  background-color: black;
  color: white;
  font-size: 10rem;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  position: relative;
  user-select: none;
  @media only screen and (max-width: 649px) {
    font-size: 6rem;
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    color: white;
    filter: blur(0.02em);
    mix-blend-mode: difference;
  }
`;

const Gradient = styled.span`
  position: absolute;
  background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: multiply;
`;

const Spotlight = styled.span`
  position: absolute;
  top: -100%;
  left: -100%;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, white, transparent 25%) center / 25% 25%,
    radial-gradient(circle, white, black 25%) center / 12.5% 12.5%;
  animation: light 5s linear infinite;
  mix-blend-mode: color-dodge;

  @keyframes light {
    to {
      transform: translate(50%, 50%);
    }
  }
`;

export const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <Neon>
        <Text data-text="BlackJack">BlackJack</Text>
        <Gradient />
        <Spotlight />
      </Neon>
    </StyledNav>
  );
};
