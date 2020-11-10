import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/home'
import The from './Pages/the'
import Vert from './Pages/vert'
import Noir from './Pages/noir'
import Blanc from './Pages/blanc';
import Puerh from './Pages/puerh';
import Wulong from './Pages/wulong';
import Info from './Pages/info';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/the">
            <The />
          </Route>
          <Route path="/vert">
            <Vert />
          </Route>
          <Route path="/noir">
            <Noir />
          </Route>
          <Route path="/blanc">
            <Blanc />
          </Route>
          <Route path="/puerh">
            <Puerh />
          </Route>
          <Route path="/wulong">
            <Wulong />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </Router>
    </div>
  );

}