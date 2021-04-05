import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';

import Container from './Components/Container'
import Info from "./Components/Info/Info";

function App() {

  return (
    <Switch>
    <Route exact path="/" component={Container} />
    <Route path="/info/:id" component={Info} />
    </Switch>
  );
}

export default App;
