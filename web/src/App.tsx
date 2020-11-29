import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './contexts/index';
import Routes from './routes';
import Navbar from './components/Navbar';

import ScrollToTop from './components/ScrollToTop';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppProvider>
        <Navbar />
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
