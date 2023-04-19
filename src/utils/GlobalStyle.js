import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}
html {
  -moz-tab-size: 4;
  tab-size: 4;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  font-family: 'Museo Sans Cyrl', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.background};
}
ul{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}
table {
  text-indent: 0;
  border-color: inherit;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
}
button{
  cursor: pointer;
  border: none;
}
`;

export const Container = styled.div``;
