import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Carousel from './components/carousel/_carousel'

export class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/carousel" />
        )} />
        <Route exact path='/carousel' component={Carousel} />
      </Switch>
    )
  }
}
