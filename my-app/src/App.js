import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // <p>{!data ? "Loading..." : data}</p>

  // <form action="/post" method="post" className="form">
  //   <button type="submit">Connected?</button>
  // </form>;

  const [data, setData] = React.useState("data");

  // <p>{!data ? "Loading..." : data}</p>

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>You clicked {!data ? 0 : data} times</p>

        <button onClick={() => data_update("api")}>Click me</button>
      </header>
    </div>
  );
}

export default App;
