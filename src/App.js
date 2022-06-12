import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs"
import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <h1>Gifs App</h1>
      <section className="App-content">
        <Link to="/gif/fail">Gifs de Fails</Link>
        <Link to="/gif/blooper">Gifs de Bloopers</Link>
        <Link to="/gif/vine">Gifs de Vines</Link>
        <Route
          component = {ListOfGifs}
          path="/gif/:keyword"
        />        
      </section>
    </div>
  );
}

export default App;