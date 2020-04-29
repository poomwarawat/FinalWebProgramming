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
import Myalbum from "./component/Album/Myalbum";
import Friend from "./page/Friend";
import AdminRunningEvent from "./page/admin/AdminRunningEvent";
// import Nevigator from "./page/admin/adminPage";
import adminPage from "./page/admin/adminPage";
import EventManagement from "./page/admin/EventManagement";
import EventReport from "./page/admin/EventReport";
import Myphoto from "./component/Album/Myphoto";
import Game from "./page/game/GamePage";
import ScoreRange from "./page/game/ScoreRange";
import PrivateRoute from './privateRoute'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Start} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <PrivateRoute path="/profile/:id" component={Profile}></PrivateRoute>
        <PrivateRoute path="/graph" component={Graph}></PrivateRoute>
        <PrivateRoute path="/setting" component={Setting}></PrivateRoute>
        <PrivateRoute path="/event" component={Event}></PrivateRoute>
        <PrivateRoute path="/friend" component={Friend}></PrivateRoute>
        <PrivateRoute path="/create-event" component={CreateEvent}></PrivateRoute>
        <PrivateRoute path="/events/:id" component={DetailsEvent}></PrivateRoute>
        <PrivateRoute path="/admin" component={adminPage}></PrivateRoute>
        <PrivateRoute path="/payment" component={AdminRunningEvent} />
        <PrivateRoute path="/event-management" component={EventManagement} />
        <PrivateRoute path="/event-manage/:id" component={EventReport} />
        <PrivateRoute path="/myalbum" component={Myalbum}></PrivateRoute>
        <PrivateRoute path="/myphoto/:id/:name" component={Myphoto}></PrivateRoute>
        <PrivateRoute path="/game" component={Game}></PrivateRoute>
        <PrivateRoute path="/ScoreRange" component={ScoreRange}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
