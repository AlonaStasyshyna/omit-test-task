import styled from 'styled-components';

export const Nav = styled.nav`
  @media ${p => p.theme.media.mobileOnly} {
    position: absolute;
    top: 57px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    padding: 6% 20px;

    background-color: #343434;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Link = styled.a`
  padding: 12px 0;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  line-height: calc(17 / 14);
  color: #ffffff;

  &:hover,
  &:focus {
    font-weight: 500;
  }
`;
