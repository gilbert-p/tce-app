import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
