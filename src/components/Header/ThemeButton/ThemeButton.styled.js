import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 10px;

  font-size: 12px;
  line-height: 14px;
  text-align: ${p => p.theme.positions.themeButtonText};
  text-transform: uppercase;
  color: ${p => p.theme.colors.filterText};
  background-color: ${p => p.theme.colors.buttonBackground};
  border-radius: 15px;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: -5px;
  ${p => p.theme.positions.themeButtonIcon};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 0.6px solid ${p => p.theme.colors.buttonBackground};
  background-color: #ffffff;

  svg {
    width: 22px;
    height: 22px;
  }
`;
