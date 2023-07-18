# 2023.07.13

1. Typescirpt 설치
    - npm install --save-dev typescript
    - (TSC TSLint, NodeJS용 타입 선언 설치) npm install --save-dev typescript tslint @types/node

2. tsconfig.json
    -  모든 typescript 프로젝트는 루트 디렉터리에 tsconfig.json이라는 파일이 존재해야 함
    - tsconfig.json 파일은 typescript의 프로젝트에서 어떤 파일을 컴파일하고, 어떤 Javascript 버전으로 방출하는지 등을 정의함
    ```
    {
        "compilerOptions": {
            "lib": ["es2015"],
            "module": "commonjs",
            "outDir": "dist",
            "sourceMap": true,
            "strict": true,
            "target": "es2015",
        },
        "include": [
            "src"
        ]
    }

    ```
    - include: TSC가 typescript 파일을 찾을 디렉토리
    - lib: TSC가 코드 실행 환경에서 이용할 수 있다고 가정하는 API
    - module: TSC가 코드를 컴파일할 대상 모듈 시스템
    - outDir: 생성된 Javascript 코드를 출력할 디렉토리
    - strict: 유요하지 않은 코드를 확인할 때 가능한 한 엄격하게 검사. 이 옵션을 이용하면 코드가 적절하게 타입을 갖추도록 강제할 수 있다.
    - target: TSC가 코드를 컴파일할 Javascript 버전

3. tslint.json
    - TSLint 설정: 탭을 사용할지 공백을 사용할지 등을 결정하는 코딩 스타일 규약을 정의하는 파일
    - 기본값으로 채워진 tslint.json 파일을 만드는 명령어
        - ./node_modules/.bin/tslint -init
        ```
        {
            "defaultSeverity": "error",
            "extends": [
                "tslint:recommended"
            ],
            "rules": {
                "semicolon": false,
                "trailing-comma": false
            }
        }
        ```

4. index.ts
    - src폴더를 생성하고 만듦
    - 출력할 test 파일
    