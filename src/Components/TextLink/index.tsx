import React, { FC } from 'react';
import styled, { css, IStyledComponentWithTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  ${({ theme }: IStyledComponentWithTheme) => css`
    color: ${theme.colors.black};
    display: inline-block;
    font-size: ${theme.fontSize.link};
    height: min-content;
    text-decoration: none;
    width: max-content;
    padding: 5px;
  `}
`;

interface ILinkProps {
  to: string;
  children: React.ReactNode;
}

export const TextLink: FC<ILinkProps> = ({ to, children }: ILinkProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);
