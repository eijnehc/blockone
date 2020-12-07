import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Transactions from './pages/Transactions';
import Trade from './pages/Trade';
import { ThemeProvider } from 'styled-components';
import { lightTheme, GlobalStyles } from './styles/Theme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Route exact path='/blockone' component={Transactions} />
          <Route path='/blockone/trade' component={Trade} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}
