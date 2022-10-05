import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles"
import ParticlesBg from 'particles-bg';
import Colors from './Design/Colors'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({

});
root.render(
  
  
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
    <ParticlesBg type="cobweb" bg = {true} num = {50} color = {Colors.theme_primary} />
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>
  
);
