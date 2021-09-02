import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState(null);

  useEffect(() => {
    const name = Cookies.get("userToken");
    setFrom(name);
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://samecookie.nazeemnato.repl.co/auth",
      { name },
      {
        withCredentials: true
      }
    );
    console.log(response.data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          required
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Login</button>
      </form>
      {from && <h1>{from}</h1>}
    </>
  );
}

export default App;
