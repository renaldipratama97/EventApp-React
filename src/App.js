import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddEvent from "./views/add-event/AddEvent";
import CardEvent from "./views/card-event/CardEvent";
import Dashboard from "./views/dashboard/Dashboard";
import { NavComponents } from './components/navigation/NavComponents'

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavComponents />
        <Switch>
          <Route path="/" exact component={AddEvent} />
          <Route path="/addevent" exact component={AddEvent} />
          <Route path="/cardevent" exact component={CardEvent} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
