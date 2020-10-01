import React from "react";
import "./assets/App.css";
import "./assets/main.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <Router>
      <div className="h-screen overflow-hidden max-w-full  bg-red-0">
        <Header />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
