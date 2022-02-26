import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Inventory} from "./Inventory"
import {Orders} from "./Orders"
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';

function App() {
  const [data, setData] = React.useState("data");

  const data_update = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => {
        setData(d.message);
      });
  };

  // data_update("api2");

  React.useEffect(() => {
    document.title = `You clicked ${!data ? 0 : data} times`;
  });

  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      React JS Frontend
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/inventory">
              Inventory
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/orders">
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/inventory' component={Inventory}/>
        <Route path='/orders' component={Orders}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
