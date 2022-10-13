import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const root = document.getElementById('root')
if(root)
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);