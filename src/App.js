import React from 'react';
import { Route } from 'react-router-dom';
import './default.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Route path="/" exact component={Homepage} />
        <Route path="/registration" exact component={Registration} />
      </div>
    </div>
  );
};

export default App;
