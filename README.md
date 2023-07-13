# 2023-07-10

- React 환경 셋팅
- voca 앱 폴더 생성
- 폴더 구조 학습
- 리액트는 왜 만들어졌는가?

```
- 배경: 상태가 바뀔 때마다 DOM을 직접 건드리는 것은 번거로움.
- 아이디어: dom을 전부 날려버리고 다시 새로 만들어서 보여주자.
- 장점: 이러면 업데이트에 대한 고민을 전혀 안해도 되기 때문에 개발이 쉬워짐.
- 문제점: 속도 성능의 문제가 생길 수 있으나 Virtual
dom으로 해결, Virtual DOM은 메모리에 가상으로 존재하는 DOM으로 변경 속도가 빠름

- 설치방법: npx create-react-app [폴더명]
- 실행방법: cd [폴더명] --> npm start
```

- src/components/Hello.js
  - 리액트 컴포넌트를 만들 땐 [import React from 'react';] 를 통하여 리액트를 불러와주어야 한다
  - 다른 컴포넌트에서 재사용 가능
- src/components/App.js
  - Hello를 상속받아서 출력
  - 재사용 가능

# 2023-07-11

- 로그인 기능
- 이벤트 핸들링(onClick)
- Form에서 useState 사용하기
- useEffect 사용하기
- 컴포넌트로 반복 제거 연습
- 로그인 구현해보기(Login.js)

- useEffect: Hook을 사용하여 컴포넌트가 마운트됐을 때(처음 생성될 때), 언마운트됐을 때, 업데이트 될 때(props가 바뀔 때) 작업을 처리함

- useState: Hook으로 컴포넌트 상태관리를 가능하게 함.

```
- my-app/src/component/Condition.js, Login.js
    function App() {
        const [condition, setCondition] = useState(false);

        // toggle -> 사용자가 "ON", "OFF" 상태를 토글할 수 있는 버튼을 생성
        const toggle = () => {
            setCondition(!condition);
        }

        // 컴포넌트가 처음 나타날 때 console에 출력됨
        useEffect(()  => {
            console.log(condition)
        }, [condition])

        // 조건으로 True, False
        const renderCondition = condition
            ? "True"
            : "False"

        return (
            <div className="App">
            <h1>Scott Coder</h1>

            <div>
                {renderCondition}
            </div>

            // button을 클릭하면 토글상태가 바뀌고 토글현재 상태 출력
            <button onClick={toggle}>Toggle</button>
            </div>
        );
    }
```

# 2023-07-12

- my-app/src/PropsCountjs
  - 컴포넌트 반복 제거
  - 컴포넌트 파일을 따로 생성해서 유지보수 용이하게 -> 컴포넌트 상속으로 처리
  - 파일 하나에 코드를 작성하면 유지보수 어려움
  - 코드가 길어지고
  - 코드 수정하고 관리할 때 하나씩 다 수정해야하는 불편함
  - 따로 컴포넌트 파일로 컴포넌트를 생성하고 상속하는 것이 좋음

# 2023-07-13
