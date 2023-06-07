import './App.css'
import { createGlobalStyle } from 'styled-components';
import Nokio from '../src/assets/fonts/NokioRegular.ttf';
import RoutesApp from './routes'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nokio';
    src: url(${Nokio}) format('truetype');
  }  
  body {
    font-family: 'Nokio', sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <RoutesApp/>
      <GlobalStyle />
    </>
  );
}
