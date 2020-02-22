import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
