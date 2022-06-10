import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs"
import { Route } from "wouter"

function App() {
  return (
    <div className="App">
      <h1>Gifs App</h1>
      <section className="App-content">
        <Route
          component = {ListOfGifs}
          path="/gif/:keyword"
        />        
      </section>
    </div>
  );
}

export default App;