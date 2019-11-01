import React from "react";
import MainNavbar from "./MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ListPresidents from "./pages/ListPresidents";
import { Switch, Route } from "react-router-dom";
import PresidentDetail from "./pages/PresidentDetail";

function App() {
  return (
    <div className="App">
      <MainNavbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/list-presidents" component={ListPresidents} />
          <Route
            exact
            path="/president-detail/:number"
            component={PresidentDetail}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
