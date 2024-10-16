import './styles/cryptoCards.css';

import CryptoDashboard from './components/CryptoDashboard';

import React from 'react';
import ReactDOM from 'react';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Watchlist from './components/Watchlist';
function App() {
  return (
    <>
      <Router>
      <Navigation/>
      <Routes>
            <Route path = "/" element={ <CryptoDashboard/>}/>
            <Route path = "/Watchlist" element={<Watchlist/>}/>
            <Route path = "*" element={<div>Not Found!</div>}/>
       
      </Routes>
      </Router> 

  </>
  );
}

export default App;
