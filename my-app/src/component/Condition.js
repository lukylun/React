import React, { useEffect, useState } from 'react';


// 조건 별로 다르게 보여줄 때

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => {
    setCondition(!condition);
  }

  // 컴포넌트가 처음 마운트될 때 console에 출력
  useEffect(()  => {
    console.log(condition)
  }, [condition])

  // 조건부
  const renderCondition = condition
    ? "True"
    : "False"

  return (
    <div className="App">
      <h1>Scott Coder</h1>
      <div>
        {renderCondition}
      </div>
      {/* 버튼을 클릭할 때마다 토글상태 변경 */}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
