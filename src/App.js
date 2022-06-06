import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs"

function App() {
  const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <button onClick={() => setKeyword('mapache')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword} />        
      </section>
    </div>
  );
}

export default App;
