import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 168px;
  padding: 40px 20px 16px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.mainLogoBackground};
`;

export const LogoImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  position: relative;
  margin-bottom: 27px;

  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    height: 0;
    border: 1px solid #ded098;
  }
`;
