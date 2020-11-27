import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './contexts/index';
import Routes from './routes';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
