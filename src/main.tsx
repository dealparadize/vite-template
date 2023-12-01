import { ReactLenis } from '@studio-freight/react-lenis';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ThemeProvider from './context/theme.context.tsx';
import { GlobalStyle } from './global.style.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactLenis root>
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </ReactLenis>,
);
