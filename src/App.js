import { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import ListOfGifs from "./components/ListOfGifs"



function App() {

  const [gifs, setGifs] = useState([])
  
  useEffect(function () {
    getGifs({keyword : 'baseball furies'}).then(gifs => setGifs(gifs))
  }, [])


  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
