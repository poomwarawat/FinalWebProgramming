import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Start from './page/Start'
import Register from './page/Register'
import About from './page/About'
import Contact from './page/Contact'
import Profile from './page/Profile'
import Graph from './page/Graph'
import Setting from './page/Setting'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' component={Start} exact></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/graph' component={Graph}></Route>
          <Route path='/setting' component={Setting}></Route>
        </Switch>
    </div>
  );
}

export default App;
