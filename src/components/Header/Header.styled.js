import styled from 'styled-components';
import backgroundImg from '../../images/background.jpg';

export const CustomizedHeader = styled.header`
  @media ${p => p.theme.media.tablet} {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 369px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: linear-gradient(
          0deg,
          rgba(52, 52, 52, 0.45),
          rgba(52, 52, 52, 0.45)
        ),
        url(${backgroundImg});
    }
  }
`;

export const Wrapper = styled.div`
  padding-top: 16%;
  padding-bottom: 16%;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;
