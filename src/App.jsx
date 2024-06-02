import { useState } from "react";
import "./App.css";

function App() {
  const [resource, setResource] = useState();

  return (
    <>
      <div className="App">
        <section className="selection">
          <button onClick={() => setResource("posts")}>Posts</button>
          <button onClick={() => setResource("users")}>Users</button>
          <button onClick={() => setResource("posts")}>Posts</button>
        </section>
      </div>
      <h1>{resource}</h1>
    </>
  );
}

export default App;
