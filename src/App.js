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
import Game from "./page/game/Game";
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
        <Route path="/friend" component={Friend}></Route>
        <Route path="/create-event" component={CreateEvent}></Route>
        <Route path="/events/:id" component={DetailsEvent}></Route>
        <Route path="/admin" component={adminPage}></Route>
        <Route path="/payment" component={AdminRunningEvent} />
        <Route path="/event-management" component={EventManagement} />
        <Route path="/event-manage/:id" component={EventReport} />
        <Route path="/myalbum" component={Myalbum}></Route>
        <Route path="/myphoto" component={Myphoto}></Route>
        <Route path="/runrena-game" component={Game}></Route>
      </Switch>
    </div>
  );
}

export default App;
