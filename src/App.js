import { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";


function App() {

  const [gifs, setGifs] = useState([])
  
  useEffect(function () {
    getGifs({keyword : 'argentina'}).then(gifs => setGifs(gifs))
  }, [])


  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <picture>
        {
          gifs.map(simpleGif => <img src={simpleGif} alt="Gif" />)
        }
        </picture>
        <br />
        <br />

      </section>
    </div>
  );
}

export default App;
