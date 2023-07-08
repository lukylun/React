import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';

function App() {
  
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // const increment1 = () => {
  //   setCount1(count1 + 1);
  // }
  // const increment2 = () => {
  //   setCount2(count2 + 1);
  // }

  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () => {
    setButtonName("Click")
  }

  return (
    <div className="App">
      <h1>Scott Coder</h1>
      <Counter click="click1"/>
      <Counter click={buttonName}/>
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
