import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Start from "./page/Start";
import Register from "./page/Register";
import About from "./page/About";
import Contact from "./page/Contact";
import Profile from "./page/Profile";
import Graph from "./page/Graph";
import Setting from "./page/Setting";
import Event from "../src/page/RunningEventPage/Event";
import CreateEvent from "../src/page/RunningEventPage/CreateEvent";
import DetailsEvent from "../src/page/RunningEventPage/DetailsEvent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Start} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/graph" component={Graph}></Route>
        <Route path="/setting" component={Setting}></Route>
        <Route path="/event" component={Event}></Route>
        <Route path="/create-event" component={CreateEvent}></Route>
        <Route path="/events/:id" component={DetailsEvent}></Route>
      </Switch>
    </div>
  );
}

export default App;
