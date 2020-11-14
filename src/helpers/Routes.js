import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../views/Home';
import Boards from '../views/Boards';
import Pins from '../views/Pins';
import PinDetails from '../views/PinDetails';
import SingleBoard from '../views/SingleBoard';
import BoardForm from '../views/BoardForm';
import PinForm from '../views/PinForm';
import NotFound from '../views/NotFound';

const Routes = ({ authed }) => (
          <Switch>
            <Route exact path='/' component={() => <Home authed={authed} />} />
            <Route exact path='/boards' component={() => <Boards authed={authed} />} />
            <Route exact path='/pins' component={() => <Pins authed={authed} />} />
            <Route exact path='/pin-details' component={() => <PinDetails authed={authed} />} />
            <Route exact path='/single-board' component={() => <SingleBoard authed={authed} />} />
            <Route exact path='/board-form' component={() => <BoardForm authed={authed} />} />
            <Route exact path='/pin-form' component={() => <PinForm authed={authed} />} />
            <Route component={NotFound} />
          </Switch>
);

export default Routes;
