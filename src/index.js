import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

