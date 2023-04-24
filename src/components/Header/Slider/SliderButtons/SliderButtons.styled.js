import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const Button = styled.button`
  display: block;
  width: ${p => (p.value === p.page ? '25px' : '15px')};
  height: ${p => (p.value === p.page ? '25px' : '15px')};
  border-radius: 50%;
  background-color: ${p =>
    p.value === p.page ? '#ffffff' : 'rgba(255, 255, 255, 0.35)'};
`;
