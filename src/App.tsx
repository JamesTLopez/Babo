import React from "react";
import "./assets/App.css";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";

import { Provider } from "./context/context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="relative h-screen bg-gray-700">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
