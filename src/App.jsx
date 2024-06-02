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
  return (
    <>
      <div className="App">
        <section className="selection">
          <button onClick={() => setResource("Posts")}>Posts</button>
          <button onClick={() => setResource("Users")}>Users</button>
          <button onClick={() => setResource("Comments")}>Comments</button>
        </section>
      </div>
      <h1>{resource}</h1>
      {items.map((item) => {
        return <div key={item.id}>{item.body || item.name}</div>;
      })}
    </>
  );
}

export default App;
