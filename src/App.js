import { useState } from "react";
import "./App.css";

const GIFS = [
  'https://media1.giphy.com/media/MbAnK3TOrmBLeix0wF/giphy.gif?cid=ecf05e47za2nj2wudulomorgoxteq4auqq3drnpxop3q88n7&rid=giphy.gif&ct=g',
  'https://media0.giphy.com/media/5Ijmu7ccsOxZL6H77c/giphy.gif?cid=ecf05e47za2nj2wudulomorgoxteq4auqq3drnpxop3q88n7&rid=giphy.gif&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media1.giphy.com/media/HIIQJ0Y43ytrGzuP8U/giphy.gif?cid=ecf05e47za2nj2wudulomorgoxteq4auqq3drnpxop3q88n7&rid=giphy.gif&ct=g'
]

function App() {

  const [gifs, setgifs] = useState(GIFS)

  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <br />
        <br />
        <picture>
        {gifs.map(gif => (
          <img src={gif} alt="Gifs" />
        ))}
        </picture>
        <br />
        <br />
        <button onClick={() => setgifs(DIFFERENT_GIFS)}>Cambiar gifs </button> 

      </section>
    </div>
  );
}

export default App;
