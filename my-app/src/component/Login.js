import React, { useState } from 'react';

function App() {
  
  // 변수로 상태 관리, useState
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  // 제출하는 함수를 변수로 선언 -> 재사용, 유지보수 용이
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
