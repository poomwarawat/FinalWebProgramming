import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Start from './page/Start'
import Register from './page/Register'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' component={Start} exact></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
    </div>
  );
}

export default App;
