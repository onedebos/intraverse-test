import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../container/Register";
import Login from "../container/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
