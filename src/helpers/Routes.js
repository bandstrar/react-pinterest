import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Boards from '../views/Boards';
import PinDetails from '../views/PinDetails';
import Pins from '../views/Pins';
import SingleBoard from '../views/SingleBoard';
import NotFound from '../views/NotFound';
import SearchResults from '../views/SearchResults';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home user={user} />}
        />
        <Route
          exact
          path='/pins/:id'
          component={(props) => <PinDetails user={user} {...props} />}
        />
        <PrivateRoute
          exact
          path='/pins'
          component={Pins}
          user={user}
        />
        <Route
          exact
          path='/boards/:id'
          component={(props) => <SingleBoard user={user} {...props} />}
        />
        <PrivateRoute
          exact
          path='/search/:term/:type'
          component={SearchResults}
          user={user}
        />
        <PrivateRoute
          exact
          path='/boards'
          component={Boards}
          user={user}
        />
        <Route component={NotFound} />
      </Switch>
  );
}

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props) } />;
};
