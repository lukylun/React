import React, { useState } from 'react';

function App() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
    alert('submitted');
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input 
          placeholder='Username' 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}/><br />
        <input
        placeholder='Password' 
        value={password}
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
