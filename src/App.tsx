import React from "react";
import "./assets/App.css";
import "./assets/main.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="container max-w-full  bg-red-0">
        <Header />
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
