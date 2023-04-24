import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 25px;
`;

export const Item = styled.li`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  border-radius: 20px;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 18px;
  line-height: calc(30 / 25);
  color: #ffffff;
`;
