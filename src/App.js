import React from 'react';
import { Switch, Route } from 'react-router-dom';
// css
import './default.scss';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

//pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          exact
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
