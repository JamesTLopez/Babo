import React from "react";
import "./assets/App.css";
import "./assets/main.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/Dashboard";
import Settings from "./components/pages/Settings";
import Home from "./components/pages/Home";

import { Provider } from "./context/context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="relative h-screen overflow-hidden max-w-full bg-gray-700 ">
          <Header />
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/settings" component={Settings}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
