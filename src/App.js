import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Lists from './Lists/Lists';
import Detail from './Detail/Detail';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path="/:id"  component={Detail}/>
        <Route path="/"  component={Lists}/>

      </Switch>
    </BrowserRouter>);
  }
}

export default App;
