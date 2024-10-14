import './styles/cryptoCards.css';

import CryptoDashboard from './components/CryptoDashboard';

import React from 'react';
import ReactDOM from 'react';

import Navigation from './components/Navigation';

import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';

import Watchlist from './components/Watchlist';
function App() {
  return (
    <><Navigation/>
    <Router>
      <Router path = "/" element={ <CryptoDashboard/>}/>
      <Router path = "/watchlist" element={<Watchlist/>}/>
      <Router path = "*" element={<div>Not Found!</div>}/>

    </Router>
  </>
  );
}

export default App;
