import styled from 'styled-components';
import backgroundImg from '../../images/background.jpg';

export const CustomizedHeader = styled.header`
  @media ${p => p.theme.media.mobileOnly} {
    background-color: #343434;
  }

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

export const SliderWrapper = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 16%;
  padding-bottom: 16%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
`;
