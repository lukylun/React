import React, { useEffect, useState } from 'react';


// 조건 별로 다르게 보여줄 때

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => {
    setCondition(!condition);
  }

  useEffect(()  => {
    console.log(condition)
  }, [condition])

  const renderCondition = condition
    ? "True"
    : "False"

  return (
    <div className="App">
      <h1>Scott Coder</h1>
      <div>
        {renderCondition}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
