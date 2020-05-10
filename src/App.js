import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

import './styles/_global.scss'

const App = () => {
  return (
    <Router>
      <div className = "App">
        <Header/>
            <Route path = { process.env.PUBLIC_URL + '/resume' }  component = { ResumePage }/>
            <Route exact path = { process.env.PUBLIC_URL + '/' } component = { HomePage }/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
