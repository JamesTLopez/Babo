import React from "react";
import "./assets/App.css";
import "./assets/main.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Tabs from "./components/layouts/Tabs";

function App() {
  return (
    <Router>
      <div className="relative h-screen overflow-hidden max-w-full bg-gray-700 ">
        <Header />

        <Switch>
          <Route path="/dashboard" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
