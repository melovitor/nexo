import './App.css'
import { Home } from './screens/Home'
import { SignIn } from './screens/SignIn'
import { SignUp } from './screens/SignUp'
import { createGlobalStyle } from 'styled-components';
import Nokio from '../src/assets/fonts/NokioRegular.ttf';

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
      <GlobalStyle />
      <Home/>
    </>
  );
}
