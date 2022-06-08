import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <ListOfGifs keyword='rocko modern life' />        
      </section>
    </div>
  );
}

export default App;
