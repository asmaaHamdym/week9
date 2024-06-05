import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [resource]);

  const handleclick = (e) => {
    setResource(e.target.innerHTML);
  };

  return (
    <>
      <div className="App">
        <section className="selection">
          <div className="container">
            <button onClick={handleclick}>Posts</button>
          </div>

          <div className="container">
            <button onClick={handleclick}>Users</button>
          </div>

          <div className="container">
            <button onClick={handleclick}>Comments</button>
          </div>
        </section>
      </div>
      <h1>{resource}</h1>
      <div className="results">
        {items.map((item) => {
          return (
            <div className="content" key={item.id}>
              {item.body || item.name}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
