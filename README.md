# 장지원 [201640133]

2주차 [21.09.08 - 리액트로 클론 코딩 시작하기](https://github.com/charade6/movie_app_2021#-09%EC%9B%94-08%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">

    리액트 앱 만들기
    리액트 앱 실행하기, 종료하기
    리액트 동작 원리
    컴포넌트 정의

</details>

3주차 [21.09.15 - 리액트 기초개념, 효율적 컴포넌트 생성](https://github.com/charade6/movie_app_2021#-09%EC%9B%94-15%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    컴포넌트와 JSX
    props
    map() 함수
</details>

5주차 [21.09.29 - prop-types적용, state와 클래스형 컴포넌트](https://github.com/charade6/movie_app_2021#-09%EC%9B%94-29%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    prop-types
    클래스형 컴포넌트
    state
    생명 주기 함수
</details>

6주차 [21.10.06 - 영화 앱 만들기(1)](https://github.com/charade6/movie_app_2021#-10%EC%9B%94-06%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    로딩 만들기
    영화 API 호출하기
    async, await
</details>

7주차 [21.10.14 - 영화 앱 만들기(2), 영화 앱 다듬기(1)](https://github.com/charade6/movie_app_2021#-10%EC%9B%94-14%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    Movie 컴포넌트 추가, 출력
    컴포넌트에 html추가
</details>

9주차 [21.10.27 - 영화 앱 다듬기(2), 영화 앱에 기능 추가하기(1)](https://github.com/charade6/movie_app_2021#-10%EC%9B%94-27%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    라우터
</details>

10주차 [21.11.03 - 영화 앱에 여러 기능 추가하기(2)](https://github.com/charade6/movie_app_2021#-11%EC%9B%94-03%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    네비게이션 추가
    상세정보 기능
    리다이렉트 기능
</details>

11주차 [21.11.10 - 영화 앱 깃허브에 배포하기, 리액트 공식문서 예제(1)](https://github.com/charade6/movie_app_2021#-11%EC%9B%94-10%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    배포
    hello 예제
    timer 예제
</details>

12주차 [21.11.17 - 리액트 공식문서 예제(2)](https://github.com/charade6/movie_app_2021#-11%EC%9B%94-17%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    Todo list 예제
    markdown 에디터 예제
</details>

13주차 [21.11.24 - 리액트 공식문서(1)](https://github.com/charade6/movie_app_2021#-11%EC%9B%94-24%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    JSX
    컴포넌트
</details>

14주차 [21.12.01 - 리액트 공식문서(2)](https://github.com/charade6/movie_app_2021#-12%EC%9B%94-01%EC%9D%BC-)

<details><summary></summary>
    <div markdown="1">
    
    state
    생명주기
    이벤트 처리
    조건부 랜더링
</details>
<br><br>

## [ 12월 01일 ]

### 리액트 공식문서

#### State and Lifecycle

- 함수 컴포넌트를 클래스 컴포넌트로 변환하기

```jsx
function Clock(props) {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />
    document.getElementById('root')
  )
}
setInterval(tick, 1000)
///////
class Clock extends React.Component {
  // React.Component를 상속하는 클래스 생성
  render() {
    // render로 return을 감싸기
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        <!--props앞 this추가-->
      </div>
    )
  }
}
```

- 클래스에 로컬 State 추가하기

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  } // 초기 state를 정하는 생성자 추가

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <!--props를 state로 변경-->
      </div>
    )
  }
}
ReactDOM.render(
  <Clock />,
  // date={new Date()}삭제
  document.getElementById('root')
)
```

- 생명주기 메서드를 클래스에 추가하기

  - 생명주기 메서드

![생명주기함수](https://blog.kakaocdn.net/dn/cdh3Mf/btqDk6pKMMV/O5rGQb2CLmSRPfEqtYn1d0/img.png)

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000) // tick()을 1초마다 불러옴
  } // render이후 실행

  componentWillUnmount() {
    clearInterval(this.timerID)
  } // 컴포넌트가 소멸된시점(DOM에서 삭제된 후) 실행

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"))
```

1. `<Clock />`가 ReactDOM.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출합니다. Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화합니다. 나중에 이 state를 업데이트할 것입니다.
2. React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다.
3. Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
4. 매초 브라우저가 tick() 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행합니다. setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출합니다. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.
5. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출합니다.

<br>

#### State를 올바르게 사용하기

- 직접 State 수정하지 않기
  > this.state를 지정할 수 있는 유일한 공간은 생성자

```jsx
this.state.comment = "hello" //x

this.setState({ comment: "hello" }) //o
```

- State 업데이트는 비동기적일 수 있음
  > react는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수도 있음<br>
  > this.props와 this.state가 비동기적으로 업데이트될 수 있음

```jsx
this.setState({
  counter: this.state.counter + this.props.increment,
})

this.setState((state, props) => ({
  counter: state.counter + props.increment,
}))
// or
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment,
  }
})
```

- State 업데이트는 병합됨
  > setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합됨

```jsx
 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

// 별도의 setState() 호출로 이러한 변수를 독립적으로 업데이트할 수 있음
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

#### 이벤트 처리

React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사함

> React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용<br>
> JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달

-React에서는 false를 반환해도 기본 동작을 방지할 수 없습니다. 반드시 preventDefault를 명시적으로 호출해야함

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log("You clicked submit.")
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}
```

- 바인딩

onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 함

1. 클래스 필드를 사용하여 콜백을 올바르게 바인딩하는 방법

```jsx
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
```

2. 클래스 필드 문법을 사용하지 있지 않고 콜백에 화살표 함수를 사용하는 방법

```jsx
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
```

- 이벤트 핸들러에 인자 전달

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

> 위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용함<br>
> 두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달됨

<br>

#### 조건부 랜더링

React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있음<br>
애플리케이션의 상태에 따라서 컴포넌트 중 몇 개만을 렌더링할 수도 있음

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}
```

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
)
// isLoggedIn prop에 따라서 다른 인사말을 렌더링함
```

- 논리 && 연산자로 If를 인라인으로 표현하기

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
      <!--unreadMessages의 길이가 0보다 클경우 &&이후 엘리먼트 출력 -->
      <!--false일경우 무시하고 건너뜀-->
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

> falsy 표현식을 반환하면 여전히 && 뒤에 있는 표현식은 건너뛰지만 falsy 표현식이 반환됨

```jsx
render() {
  const count = 0;
  return (
    <div>
      { count && <h1>Messages: {count}</h1>}
    </div>
  );
}
// <div>0</div>이 render 메서드에서 반환됨
```

- 조건부 연산자로 If-Else구문 인라인으로 표현하기

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      <!-- isLoggedIn이 참이면 currently, 거짓이면 not출력-->
    </div>
  );
}
```

조건이 너무 복잡하다면 컴포넌트를 분리하는것이 가독성에 좋음

- 컴포넌트가 렌더링하는 것을 막기

다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때<br>
렌더링 결과를 출력하는 대신 null을 반환하면 해결

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return <div className="warning">Warning!</div>
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById("root"))
```

컴포넌트의 render 메서드로부터 null을 반환하는 것은 생명주기 메서드 호출에 영향을 주지 않음

---

## [ 11월 24일 ]

### 리액트 공식문서

- JSX - **J**ava**S**cript e**X**tension JavaScript의 확장 버전이고 HTML 문법을 JavaScript 코드 내부에 쓴 것

```jsx
const element = <h1>Hello, world!</h1>

ReactDOM.render(element, document.getElementById("root"))
```

> JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있음

```jsx
function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
}

const element = <h1>Hello, {formatName(user)}!</h1>

ReactDOM.render(element, document.getElementById("root"))
```

> 싱글태그사용시 무조건 /를 넣어야함

```jsx
const element = <img src={user.avatarUrl} />
```

- 컴포넌트
  > 컴포넌트의 이름은 항상 대문자로 시작함

```jsx
// 함수형 - props 사용할때
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

```jsx
// 클래스형 - state 사용할때
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

> 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있음

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}
```

> 컴포넌트 추출

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}
```

컴포넌트를 분할하여 가독성을 높이고 재활용성 높임

```jsx
function Comment(props) {
  return (
    <div className="Comment">
    //</>
      <UserInfo user={props.author} />
      // -- UserInfo 컴포넌트 --
      // <div className="UserInfo">

      //   <Avatar user={props.user} />
      ////   -- Avatar 컴포넌트 --
      ////   <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
      ////   -- Avatar 컴포넌트 끝 --

      //   <div className="UserInfo-name">
      //     {props.user.name}
      //   </div>
      // </div>
      // -- UserInfo 컴포넌트 끝 --

      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

---

## [ 11월 17일 ]

### 리액트 공식문서 예제

Todo list 예제

```jsx
<script type="text/babel">
      class TodoApp extends React.Component {
        constructor(props) {
          super(props);
          this.state = { items: [], text: "" };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        render() {
          return (
            <div>
              <h3>TODO</h3>
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                // htmlFor -> className처럼 html과 구분하기위한 jsx키워드
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <button>Add #{this.state.items.length + 1}</button>
                // 리스트의 item.length에 1을 더해서 버튼에 출력
              </form>
            </div>
          );
        }

        handleChange(e) {
          this.setState({ text: e.target.value });
        }// 모든 키보드 입력마다 React의 state를 갱신하여 보여줌

        handleSubmit(e) {
          e.preventDefault();
          // html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다.
          if (this.state.text.length === 0) {
            return;
          }
          const newItem = {
            text: this.state.text,
            id: Date.now(),
          };
          this.setState((state) => ({
            items: state.items.concat(newItem),
            text: "",
            // 입력된 값은 state의 text:""에 임시로 저장됨
          }));
        }
      }

      class TodoList extends React.Component {
        render() {
          return (
            <ul>
              {this.props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          );
        }
      }

      ReactDOM.render(<TodoApp />, document.getElementById("todos-example"));
    </script>
  </head>
  <body>
    <div id="todos-example"></div>
  </body>
```

markdown 에디터

```jsx
// cdn방식이 실행이 안되므로 create-react-app으로 생성
import React from "react"
import { Remarkable } from "remarkable"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.md = new Remarkable() // 객체 생성
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: "Hello, **world**!" }
    // Remarkable에 변환할 마크다운문장 제출
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    // 글이 입력되면 state의 value를 갱신
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) }
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <br />
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    )
  }
}

export default App
```

---

## [ 11월 10일 ]

- 영화 앱 배포하기

1. package.json 수정

`package.json`

```jsx
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",       // 추가
    "deploy": "gh-pages -d build"       // 추가
},

// 생략

,"homepage": "https://charade6.github.io/movie_app_2021" // 추가
```

2. 터미널에 `npm install gh-pages` 입력하여 설치

3. `npm run deploy` 입력하여 배포

---

[완성](https://charade6.github.io/movie_app_2021)
<br>
영화 앱 클론코딩 끝

---

### 리액트 공식문서

#### React의 특징

- 상호작용이 많은 UI개발에 적합하다.
- 컴포넌트 로직은 JavaScript로 작성한다.
- 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
- DOM과는 별개로 상태를 관리할 수 있다.
- 기술 스택의 나머지 부분에는 관여하지 않는다.
- 기존 코드와 별개로 개발이 가능하다.
- React Native를 이용하면 모바일 앱도 만들 수 있다.

hello 메시지 예제

```jsx
// html
<head>
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script crossorigin src=""></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    // JSX를 JavaScript로 확인하기위해 Babel REPL을 사용
    <script type="text/babel">
        class HelloMessage extends React.Component {
            render() {
                return (
                    <div>
                        Hello {this.props.name}
                    </div>
                );
            }
        }

        ReactDOM.render(
            <HelloMessage name="Charade" />,
            document.getElementById('hello-example')
        );
    </script>
</head>
<body>
    <div id="hello-example"></div>
</body>
```

> hello Charade

timer 예제

```jsx
<head>
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script crossorigin src=""></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">
        class Timer extends React.Component {
        constructor(props) {
            super(props);
            // React의 class는 모두 React.Component에서 상속되기 때문에 super(props)사용
            this.state = { seconds: 0 };
        }

        tick() {
            this.setState(state => ({
                seconds: state.seconds + 1
            }));
        }

        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000);
            // 1초에 한번씩 tick()메소드 호출
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return (
            <div>
                Seconds: {this.state.seconds}
            </div>
            );
        }
        }

        ReactDOM.render(
            <Timer />, document.getElementById('timer-example')
        );
    </script>
</head>
<body>
    <div id="timer-example"></div>
</body>
```

---

## [ 11월 03일 ]

- 네비게이션 만들기

`Navigation.js`

```jsx
function Navigation() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/#/about">About</a>
    </div>
  )
}
export default Navigation
```

`App.js`

```jsx
import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Navigation /> // 컴포넌트 추가
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
export default App
```

> 🤔 링크를 클릭할 때마다 리액트가 죽고, 새 페이지가 열리는 문제가 발생한다.<br>
> ❓ a 태그의 href속성이 페이지 전체를 다시 그리는 성질을 가지고 있음

<br>

- a 태그 Link 컴포넌트로 바꾸기

`Navigation.js`

```jsx
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/#/about">About</Link>
    </div>
  )
}
export default Navigation
```

![1](https://postfiles.pstatic.net/MjAyMTExMDZfMjA2/MDAxNjM2MTc0MDA3MjE4.1iHUCchovad_U1BAR9XyYZszXGbrGMdJ0yuslL2Nza4g.tEvpLiYlmJhP-frUxlGvT7R_5wMiz5DkGo5CFdjB44Ig.PNG.charade6/1.PNG?type=w773)<br>
![2](https://postfiles.pstatic.net/MjAyMTExMDZfMTMy/MDAxNjM2MTc0MDA2Njgw.L-t90-fdljY2NsPymY0hqpLw8bnI-DSTYqR5qJs87Zcg.k2-RkzrZrgDyrIO0DAfT07qytQizFBt83kG_UKv1uewg.PNG.charade6/2.PNG?type=w773)

- 영화 상세정보 기능 만들기

`Detail.js`

```jsx
function Detail(props) {
  // Movie컴포넌트의 Link컴포넌트가 보내준 영화데이터를 받음
  return <span>hello</span>
}
export default Detail
```

`Movie.js`

```jsx
import { Link } from 'react-router-dom'

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className='movie'>
            <Link to=
                {{
                    pathname: '/detail',        // 영화 카드를 누르면 /detail로 이동함
                    state: {title, year, summary, poster, genres}       // props를 보내줌
                }}
            />
            </Link>
        </div>
    )
}
```

`App.js`

```jsx
import Detail from "./routes/Detail"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/detail" component={Detail} /> // Detail 컴포넌트 추가
    </HashRouter>
  )
}
```

영화카드클릭시<br>
![3](https://postfiles.pstatic.net/MjAyMTExMDZfMzMg/MDAxNjM2MTc0MDA3Mjky.kXX_4To_JVpUQhxvzqBQrf5vX4Xg4fWE03JUOgfsvXYg.sEom02C848zOBDKzWqEw9oOAd4pSUQwOWB9bnYEBC9og.PNG.charade6/3.PNG?type=w773)<br>
URL에 /detail 입력하여 이동시</br>
![4](https://postfiles.pstatic.net/MjAyMTExMDZfMjk3/MDAxNjM2MTc0MDA3MDk2.MvYpP19BGMAd82_TUndFvUG4GP6qLOeZFN1qG8J8mPcg.rrJCpRyvZbmTlSxNnG4fFezmQC3M2R681aHSu6Xc938g.PNG.charade6/4.PNG?type=w773)

> 🤔 영화를 선택하지 않았는데도 /detail이 접속됨

<br>

- 리다이렉트 기능 만들기

route props의 history키를 활용

`Detail.js`

```jsx
import { Component } from "react"

class Detail extends Component {
  componentDidMount() {
    // Detail컴포넌트가 마운트될 때
    const { location, history } = this.props
    if (location.state === undefined) {
      // location.state가 undefined일 경우
      history.push("/") // push()함수 실행
    }
  }
  render() {
    return (
      <span>{location.state.title}</span> // 타이틀 출력
    )
  }
}

export default Detail
```

![5](https://postfiles.pstatic.net/MjAyMTExMDZfMTM1/MDAxNjM2MTc0MDA3NDQw.NZCqRrE_qfGIp8iR9_GFcUtMtLMqS0o1u90eniy_GJMg.2RNIpbW5bbGsX34Ao72ng6VNPaeNdpTWVMqz0IOGEn4g.PNG.charade6/%EC%BA%A1%EC%B2%98.PNG?type=w773)

> 😥 **오류발생**💧<br>
> ❓ Detail컴포넌트는 render() → componentDidMount()순서로 실행하기 때문이다 <br>
> render()함수 내에서 location.state.title을 사용하려는데 location.state가 undefined이므로 오류가 발생함<br>
> 🛠 render()함수에도 componentDidMount()에 작성한 리다이렉트 코드를 추가함

`Detail.js`

```jsx
render (){
    const {location} = this.props
    if(location.state){
        return(
            <span>{location.state.title}</span>
        )
    } else {
        return null
    }
}
```

<br>

## [ 10월 27일 ]

- 영화 장르 추가하기

`Movie.js`

```jsx
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie-data">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie-title">{title}</h3>
      <h5 className="movie-year">{year}</h5>

      <ul className="movie-genres">
        {genres.map((genre) => {
          // genres props는 배열이므로 map()함수를 이용함
          return <li className="movie-genre">{genre}</li>
        })}
      </ul>

      <p className="movie-summary">{summary}</p>
    </div>
  )
}
```

![1](https://postfiles.pstatic.net/MjAyMTEwMzBfMzQg/MDAxNjM1NTUyNjk0NzY3.mSRPFrP7KcbT9VUw2gUf4kznpbRjvqwtblbxb6jUbbMg.4d9gCq-nVTGCROAZQ_nlpFZOy_1K55SqUnl65AseQUkg.PNG.charade6/1.PNG?type=w773)

> 😥 **오류발생**💧<br>
> ❓ key props가 없기때문에 실행결과는 나오지만 keyprops 경고가뜸<br>
> 🛠 key props를 추가함

<br>

`Movie.js`

```jsx
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie-data">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie-title">{title}</h3>
      <h5 className="movie-year">{year}</h5>

      <ul className="movie-genres">
        {genres.map((genre, index) => {
          // 배열의 index를 key값으로 사용
          return (
            <li key={index} className="movie-genre">
              {genre}
            </li>
          )
        })}
      </ul>

      <p className="movie-summary">{summary}</p>
    </div>
  )
}
```

- CSS추가

[CSS](https://github.com/easysIT/do_it_clonecoding_movieapp/blob/master/clone-starter-kit-07/src/Movie.css)

![2](https://postfiles.pstatic.net/MjAyMTEwMzBfNzkg/MDAxNjM1NTUyNjk1MjQ4.3IeMvNycNjCb1HLXZlTjYB9gHFG7HfUdZUr1QcYwFE8g.Vwu2Q5SPzBvKdi92mBpzAuTZWwBeIzivgdlO7RqF54wg.PNG.charade6/2.PNG?type=w773)

- 시놉시스 글자수 제한하기

`Movie.js`

```jsx
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie-data">
      // 중략
      <p className="movie-summary">{summary.slice(0, 180)}...</p> // 자바스크립트의
      slice() 함수를 이용하여 제한
    </div>
  )
}
```

![3](https://postfiles.pstatic.net/MjAyMTEwMzBfMjQg/MDAxNjM1NTUyNjk1MjI1.zVMb7V8PBHt8d7N07ZWjfYhhgAuLupCJOZ55-vwZ0FYg.BAC1szVxeOV0ryLMojIWJ1TMqZfpz5b7TMKgoKSv5DUg.PNG.charade6/3.PNG?type=w773)

<br>

- 라우터 - 사용자가 입력한 URL을 통해 특정 컴포넌트를 호출함

1. 외부모듈이므로 `npm install react-router-dom` 으로 설치
2. Home.js 생성하여 App.js 내용복제
3. App.js에 HashRouter와 Router 임포트하고 라우터 컴포넌트가 반환되도록 수정

`App.js`

```jsx
import { HashRouter, Route } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Route />
    </HashRouter>
  )
}
```

4. path, component prop 추가

`App.js`

```jsx
function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} /> // http://localhost:3000/#/ 일때
      Movie컴포넌트가 보여지게
      <Route path="/about" component={About} /> // http://localhost:3000/#/about
      일때 About 컴포넌트가 보여지게
    </HashRouter>
  )
}
```

![4](https://postfiles.pstatic.net/MjAyMTEwMzBfMTE0/MDAxNjM1NTUyNjk0ODkw.WMnTRpT0kXnXgZ6VVY9vYMXlvx5ypAgitpH38V30ySMg.39JDoilmCQOlTy-AVsTfTgm41-4Pcfg56KAMVm3snnAg.PNG.charade6/4.PNG?type=w773)

> 🤔 About 컴포넌트만이 아닌 Movie 컴포넌트가 함께 출력됨

5. exact props 추가하기

exact props는 Route 컴포넌트가 path props와 정확하게 일치하는 URL에만 반응하도록 함

`App.js`

```jsx
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
```

![5](https://postfiles.pstatic.net/MjAyMTEwMzBfMjYz/MDAxNjM1NTUyNjk0NjMx.RvAtamTksufczsvcW0RBLwm-LNaln-3YeNWBvu19hm0g.eVPhwVHrRPJ_gX0ofVtJLqGCIdC0ohOR3czEXiR4dhUg.PNG.charade6/5.PNG?type=w773)

---

## [ 10월 14일 ]

- Movie 컴포넌트 만들기

`Movie.js`

```jsx
import Proptypes from "prop-types"

function Movie(id, title, year, summery, poster) {
  // state가 필요하지 않으므로 함수형 컴포넌트로 작성
  return (
    <h1>{title}</h1> // 전달받은 아규먼트값 출력
  )
}

Movie.proptypes = {
  // API에 필요한데이터만 골라서 proptypes에 작성
  id: Proptypes.number.isRequired,
  year: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summery: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired, // 영화포스터의 이미지주소를 저장하기 위함
}

export default Movie
```

<br>

- 영화 API 정렬기능 사용하기

`App.js`

```jsx
getMoives = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  ) // sort_by라는 파라미터를 사용하여 평점을 기준으로 내림차순 출력
  console.log(movies)
  this.setState({ movies, isLoading: false })
}
```

![1](https://postfiles.pstatic.net/MjAyMTEwMTZfMTQg/MDAxNjM0MzM0NTg0OTE3.Yf0jUwny0BGd2oaU1GYtOizKv474v7C_xVbblMVQR8Ug.xn7zx8Wqa6cAZRDQEdySzSvmx5m7g_-E-LVOcL2SuyMg.PNG.charade6/456.png?type=w773)

<br>

- App컴포넌트에서 Movie컴포넌트 그리기

`App.js`

```jsx
 render(){
        const { isLoading, movies } = this.state
        return(
            <div>
                { isLoading
                ? <img src="img/loading.gif" width="100px" height="100px" alt="loading"/>
                : movies.map((movie) => {
                    return (
                        <Movie
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summery = {movie.summery}
                            poster = {movie.poster}
                        />
                    )
                }) }
            </div>
        )
    }
```

![2](https://postfiles.pstatic.net/MjAyMTEwMTZfMTQ0/MDAxNjM0MzM0NTk0NjI4.Ug_emdbVSSfccjmihRSIjnlNC6t2ZzdYQ1Uq_MheexQg.99uDqHnk4-Y0WxViU1UZ055iHtPj0PYpXZQNOemcapIg.PNG.charade6/789789.PNG?type=w773)

> 😥 **오류발생**💧<br>
> ❓ 1. key props가 없기때문에 실행결과는 나오지만 keyprops 경고가뜸<br>
> ❓ 2. poster props의 경우 키 이름이 medium_cover_image이므로 오류가뜸<br>
> 🛠 key props추가, poster props 키 이름변경

<br>

`App.js`

```jsx
<Movie
  key={movie.id} // key값 추가
  id={movie.id}
  year={movie.year}
  title={movie.title}
  summary={movie.summary}
  poster={movie.medium_cover_image} // 키 이름 변경
/>
```

<br>

- App컴포넌트와 Movie컴포넌트에 HTML추가하기

`App.js`

```jsx
render(){
    const { isLoading, movies } = this.state
    return(
        <section class="container">
            { isLoading
            ? (<div class="loader"><img src="img/loading.gif" alt="loading"/></div>)
            : (<div class="movies">
                {
                    /*    생략    */
                }</div>)
            }
        </section>
    )
}
```

`Movie.js`

```jsx
function Movie({ title, year, summary, poster }) {
  return (
    <div class="movie-data">
      <img src={poster} alt={title} title={title} />
      <h3 class="movie-title">{title}</h3>
      <h5 class="movie-year">{year}</h5>
      <p class="movie-summary">{summary}</p>
    </div>
  )
}
```

![3](https://postfiles.pstatic.net/MjAyMTEwMTZfMTMw/MDAxNjM0MzM1MjUzNDQ5.MdOqiuucvhVZRU06FMl_gaIChE3qjWAwyYNTe4gzcnEg.0DKVoiygA1WxD8he1CIge7PB5fn45R6CFMYjpjsJer0g.PNG.charade6/123123123132.PNG?type=w773)

<br>

### 영화 앱 다듬기

- 장르 추가하기
  `App.js`

```jsx
movies.map((movie) => {
  return (
    <Movie
      genres={movie.genres} // genres props를 Movie컴포넌트로 전달
    />
  )
})
```

`Movie.js`

```jsx
function Movie({title, year, summary, poster, genres}) {    // genres 추가

Movie.propTypes = {
    genres: Proptypes.arrayOf(Proptypes.string).isRequired      // genres에 여러값이 들어올수 있으므로 arrayOf로 작성
}
```

- class 속성이름 className으로 바꿔주기

![4](https://postfiles.pstatic.net/MjAyMTEwMTZfNzcg/MDAxNjM0MzM1MzM2MDIx.W-I9z9f8EkWhPVdcYkvgKJzQLXgCkIcQUZnDC1MLhsAg.fKBjbuOxsc9rp4Z2aZDRtuEWxy3HKg_sQ7s3RopBcDMg.PNG.charade6/fd123as1f23a.PNG?type=w773)

<br>

> 😥 **오류발생**💧<br>
> ❓ JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름대신<br> > **camelCase** 프로퍼티 명명 규칙을 사용함<br>
> 🛠 class속성이름을 모두 className으로 바꾸자

`App.js`

```jsx
render(){
    const { isLoading, movies } = this.state
    return(
        <section className="container">
            { isLoading
            ? (<div className="loader"><img src="img/loading.gif" alt="loading"/></div>)
            : (<div className="movies">
                {
                    /*    생략    */
                }</div>)
            }
        </section>
    )
}
```

`Movie.js`

```jsx
function Movie({ title, year, summary, poster }) {
  return (
    <div className="movie-data">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie-title">{title}</h3>
      <h5 className="movie-year">{year}</h5>
      <p className="movie-summary">{summary}</p>
    </div>
  )
}
```

<br>

---

## [ 10월 06일 ]

### 영화 앱 만들기

- 영화 데이터 로딩상태 표시하기

`APP.js`

```jsx
import { Component } from "react" // 클래스형 컴포넌트로 작성

class App extends Component {
  state = {
    isLoading: true, // state 정의
    movies: [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000) // 6초 이후 isLoading의 값을 false로 변경
  }
  render() {
    const { isLoading } = this.state // 구조분해할당으로 this.state에 있는 isLoading을 상수로 선언
    return (
      <div>
        {isLoading ? (
          <img src="img/loading.gif" alt="loading" />
        ) : (
          "영화 데이터 출력"
        )}
      </div> // 삼항연산자 사용하여 isLoading이 true면 로딩 출력
    )
  }
}

export default App
```

![1](https://postfiles.pstatic.net/MjAyMTEwMDlfMjAw/MDAxNjMzNzgwODMxMDM2.r9NixJLvoid6u1krlwTaX9XSc4l9d_-J83hAZIe0di4g.RS6sR39sEGWmg1kdML5zWAkl9eE0uTE3dhlvGvVjNs0g.PNG.charade6/1.PNG?type=w773)
<br>

> ❓ componentDidMount를 쓰는 이유?<br>
> 💡 초기 렌더링이 state 값을 읽어서 로딩을 출력하는것이기 때문에 초기렌더링 이후 실행하는 라이프사이클 함수인 componentDidMount()를 사용함

<br>

- 영화 API 사용준비

axios : API연동모듈
[더알아보기](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API)

> 외부모듈이므로 터미널에서 `npm install axios` 입력하여 설치

<br>

- 영화API를 영화 앱에서 호출하기

axios.get()함수의 인자로 URL을 전달하여 API호출

`APP.js`

```jsx
import {Component} from 'react'
import axios from "axios"   // axios를 임포트함

~ 중략

    getMoives = () => {
        const movies = axios.get('https://yts-proxy.now.sh/list_movies.json')       // API를 호출하여 movies에 저장
        console.log(movies);
    }
    componentDidMount(){
        this.getMoives()
    }

```

![2](https://postfiles.pstatic.net/MjAyMTEwMDlfNzQg/MDAxNjMzNzgwODQwMjky.TjMj715YXLSquFhSgBaCbrg3ENqdUVCxGir7xCT_rlEg.B-0dBrH6RPde8hbFhy7Ne9FdzPPo0sAeCJyg6Mh51J4g.PNG.charade6/2.PNG?type=w773)
<br>

![3](https://postfiles.pstatic.net/MjAyMTEwMDlfNDkg/MDAxNjMzNzgwODQwMjUw.XNKdiVCoaInNvXJB5o4OOnwLLXgacIBuBVrwuoH2w-gg.7mfiCD8ZsvScr2KZ6HeQCtV-jgEYvuo2TYWmlNRmCvIg.PNG.charade6/3.PNG?type=w773)

> 🤔 네트워크에는 axios가 API를 호출했지만 콘솔에서는 axios.get()함수로 데이터를 못잡음

- getMovies()에 async 붙이고, axios.get에 await 붙이기

axios.get()함수사용시 시간이필요함<br>
비동기함수인 async와 await사용하여 비동기식 처리하여
axios.get()함수가 실행된이후 다음작업을 실행함<br>
[async, await 더알아보기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await)

`App.js`

```jsx
getMoives = async () => {
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  console.log(movies)
}
```

<br>

![4](https://postfiles.pstatic.net/MjAyMTEwMDlfMTE4/MDAxNjMzNzgwODQwMzEw.9XJO9rRL1KFV4GusyLPylagImfwN37BrpYIVe8uSTsUg.hleU2bAS-TGOT37WY8ytWINaFPuNZ8d67IHRvHSC5Lkg.PNG.charade6/4.PNG?type=w773)

<br>

- 구조분해할당을 이용하여 영화 데이터 저장하기

`App.js`

```jsx
getMoives = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  this.setState({ movies, isLoading: false }) // 호출한 API 데이터를 movies state에 저장하고 로딩을 끝냄
}
```

![5](https://postfiles.pstatic.net/MjAyMTEwMDlfMjA5/MDAxNjMzNzgwODQwMjg1.k6CBoYCg4aLOaXQ8pZeHuZe1RIR48Ab--HDRP6kk_scg.7cEFADzbbtsCHpeJE22RWZ4Dgf__8MVnMJZ5JopkYDwg.PNG.charade6/5.PNG?type=w773)

<br>

---

## [ 09월 29일 ]

### **prop-types**

전달받은 props의 데이터타입 검사<br><br>

- prop-types 설치하기

> 외부모듈이므로 터미널에서 `npm install prop-types` 입력하여 설치

- prop-types 적용하기

`App.js`

```jsx
import PropTypes from "prop-types" //맨윗줄 추가

Food.propTypes = {
  name: PropTypes.string.isRequired, // name에 string이라는 자료형이 반드시 필요하다
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}
```

![5주1](https://postfiles.pstatic.net/MjAyMTEwMDJfMjg3/MDAxNjMzMTc0MzIyNDg1.C5c3_cA-E5XOUNyue08UkB8cNkUcLXJycWYENpwZl1kg.nvfhBeAIoVlA8PD7ggirY9mGTPmobzscjLeW_UfvmlMg.PNG.charade6/01.PNG?type=w773)

> 😥**오류발생**💧<br>
> ❓ rating은 데이터타입이 string이 아니므로 오류발생<br>
> 🛠 데이터타입을 number로 바꿔주자

```jsx
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, // 필수x 값이 전달될때는 자료형이 number이여야함
}
```

- [prop-types의 다양한 사용방법(공식문서)](https://github.com/facebook/prop-types)

### **state**

> 정적인 데이터 - props 사용<br>
> 동적인 데이터 - state 사용<br> > **_state는 함수형 컴포넌트가 아닌 class형 컴포넌트에서 사용_**

- class형 컴포넌트 작성

`App.js`

```jsx
import React from "react"
// 또는 import {Component} from 'react'
// import React, {Component} from 'react'

class App extends React.Component {
  // class App extends Component {
  render() {
    // class형 컴포넌트에서는 바로 retern을 사용할수없으므로 render()함수 사용
    return <h1>Hello</h1>
  }
}

export default App
```

![5주2](https://postfiles.pstatic.net/MjAyMTEwMDJfMjQy/MDAxNjMzMTc0MzIyNDg4.FkizCncZaDmxHWFqUuhZd41QbF-qvp_gz27wDdPwwksg.SIN168jFupITcSQRngPI5razERG9_padzeOoRrXpIocg.PNG.charade6/02.PNG?type=w773)

<br>

- state 정의

`App.js`

```jsx
class App extends Component {
  state = {
    // state 정의
    count: 0,
  }
  render() {
    return <h1>The number is: {this.state.count} </h1>
  }
}
```

![5주3](https://postfiles.pstatic.net/MjAyMTEwMDJfMjU1/MDAxNjMzMTc0MzIyNDkz.qCdPM7pVBUqU5laA6415ZcOGIxfSJgN_rgJsrfC0iYEg.cP1q7tBpR4ICZGTTl-pEzTV_4BFNiGLQcIl8bMXzXVQg.PNG.charade6/03.PNG?type=w773)

<br>

- 버튼으로 count state값 변경하기

`App.js`

```jsx
class App extends Component {
  state = {
    count: 0,
  }

  add = () => {
    this.setState({ count: this.state.count + 1 })
  }

  minus = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
```

![5주4](https://postfiles.pstatic.net/MjAyMTEwMDJfMjQ0/MDAxNjMzMTc0MzIyNDk3.jwTMAlkzNG6t1bZiPNSkBFPoHTcTLnTMfg1FJ6TiL40g.EtLoU_T_dQhqdu3XzfUBgyCyKx5ZO2J0SQC8im5nroIg.PNG.charade6/04.PNG?type=w773)

<br>

- 생명주기함수

![생명주기함수](https://blog.kakaocdn.net/dn/cdh3Mf/btqDk6pKMMV/O5rGQb2CLmSRPfEqtYn1d0/img.png)<br>

> 컴포넌트는 생성 => 업데이트 => 제거의 생명주기를 가지고있음

<br>

1. conponentDidMount()

```jsx
componentDidMount(){
    console.log('componentDidMount')
}
```

![5주5](https://postfiles.pstatic.net/MjAyMTEwMDJfMTIx/MDAxNjMzMTc0MzIyNTI0.OJGNH5YYXhPpmkDOzL0t4VWk6yY-WCqI5eEFNrHSZ_og.NtiwWtculvGrwGnje5HDs1TAe-vpuhrmkEII8Ss1AWYg.PNG.charade6/05.PNG?type=w773)

> 컴포넌트가 마운트 된 직후에 호출

<br>

2. conponentDidUpdate()

```jsx
componentDidUpdate(){
    console.log('componentDidUpdate')
}
```

![5주6](https://postfiles.pstatic.net/MjAyMTEwMDJfNDkg/MDAxNjMzMTc0MzIyNTU1.0b6KXCh76GjRHktbkuI4RLpFktEbWAvBXu7ujaiCz7sg.Io_jBUkh_5Lwr4F-UFXlkwx92TKjfu_2UHFxFPENl-sg.PNG.charade6/06.PNG?type=w773)

> 갱신(렌더)이 일어난 직후 호출되며, 최초 렌더링에서는 호출되지않음

<br>

3. conponentWillUnmount()

```jsx
componentWillUnmount(){
    console.log('componentWillUnmount')
}
```

> 이 함수는 컴포넌트가 화면에서 떠날 때 실행되므로 직접확인하기 어려움

<br>

---

## [ 09월 15일 ]

### 컴포넌트와 JSX

**컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다**<br><br>

- Potato.js추가하여 Potato 컴포넌트 정의

`Potato.js`

```jsx
function Potato() {
  return <h3>I love potato</h3>
}

export default Potato
```

<br>

- Potato 컴포넌트 사용하기

`index.js`

```jsx
import ReactDOM from 'react-dom'
import App from './App'
import Potato from './Potato'

ReactDOM.render(<App /><Potato />, document.getElementById('root'))
```

> 😥**오류발생**💧<br>
> ❓리액트는 최종적으로 단 **_한개의 컴포넌트만_** 그릴수 있음<br>
> 🛠 App컴포넌트 안에 Potato컴포넌트를 넣어주자

`App.js`

```jsx
import Potato from "./Potato"

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato /> // 추가
    </div>
  )
}

export default App
```

![✅1](https://postfiles.pstatic.net/MjAyMTA5MTdfMjU5/MDAxNjMxODE3Njg3NjI3.JrGitLxyMBI5I6l7JXTIX0QzKSiPQJ4ZP4q_PpuGiMEg.O2ZX4qs-c9Js6RomkdtItRdUW8CoKAlC0nRAFFDDXvcg.PNG.charade6/1.PNG?type=w773)

<br>

- Potato.js 없이 Potato에 정의한 내용 나타내기

`App.js`

```jsx
function Potato() {
  // App.js 내부에 Potato 컴포넌트 작성
  return <h1>I like potato</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
    </div>
  )
}

export default App
```

![✅2](https://postfiles.pstatic.net/MjAyMTA5MTdfMTg0/MDAxNjMxODE3Njg4MTM2.ZVA6k0kspj2OIxmDHgk0-BUfbPQwUs5uaXmyzztqo3cg.od0rhDKwAK9hKWm_-dRH_kzNthuxzB2PPIiLLD1RVOog.PNG.charade6/2.PNG?type=w773)

<br>

### props

컴포넌트에서 컴포넌트로 전달하는 데이터

- ~~컴포넌트 여러 개 사용하기~~

`App.js`

```jsx
function Movie() {
  return <h1>I like potato</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  )
}

export default App
```

![✅3](https://postfiles.pstatic.net/MjAyMTA5MTdfMTM5/MDAxNjMxODE3Njg4MjIx.nBbTYVFk4_YSxoyVo8Bwhi4VPnVGRWmrjhJDHH1dF-4g.DTx_SZrVWEBw7vw17WNBlF-dXCQ4ju2X8v6ICGpKmTMg.PNG.charade6/3.PNG?type=w773)

> 🤔리스트의 내용이 모두 동일

<br>

- props로 컴포넌트에 데이터 전달하기
  - props에는 불리언 값(true, false), 숫자, 배열과 같은 다양한 형태의 데이터를 사용할 수 있음
  - props의 전달 데이터는 문자열인 경우를 제외하면 모두 **_중괄호_**로 감싸야 함

`App.js`

```jsx
function Food() {
  return <h1>I like potato</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" /> // props 이름인 fav에 kimchi값을 넣어 Food 컴포넌트에
      전달
    </div>
  )
}

export default App
```

> Food 컴포넌트에 props를 전달만 하고 사용하지 않았기 때문에 앱에서는 변화없음

<br>

- props.fav를 중괄호로 감싸서 return값에 적용하기

`App.js`

```jsx
function Food(props) {
  return <h1>I like {props.fav}</h1>
}
```

![✅4](https://postfiles.pstatic.net/MjAyMTA5MTdfMTI4/MDAxNjMxODE3Njg4NDkw.XnEeicp7SS3Vk7g6_8v4Jzpiuzyf0V-VZIYF4MMmaR0g.tP6cFIfR0H9ZxR-2_U2YB4ONqmLhzhQWyZweYTU5-Ywg.PNG.charade6/4.PNG?type=w773)

<br>

- 구조 분해 할당으로 props 사용하기

`App.js`

```jsx
function Food(props) {
    { fav } = props
    return <h1>I like { fav }</h1>
}
// 또는
function Food({ fav }) {
    return <h1>I like { fav }</h1>
}
```

> 데이터의 개수가 많아지면 구조 분해 할당을 사용하는 것이 편리함

<br>

- 여러 개의 컴포넌트에 props 사용하기

`App.js`

```jsx
function Food({ fav }) {
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  )
}

export default App
```

![✅5](https://postfiles.pstatic.net/MjAyMTA5MTdfNDUg/MDAxNjMxODE3Njg4NDg0.GW9ObPGrqpyywt8jzaw1Z6ZM13WLX0C4-FjXklOf_HQg.Rfp4mTEByIWFL2DA9hIapW9zelMz3m1uGQTqr5D2Ybog.PNG.charade6/5.PNG?type=w773)

> 🤔여러 개를 직접 입력하는 것은 비효율 적임

<br>

### map() 함수

- 음식 데이터 만들기

`App.js`

```jsx
const foodILike = [
  {
    name: "chicken",
    image:
      "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
  },
  {
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg",
  },
]
```

> 서버에서 넘어온 데이터를 저장할 수 있도록 foodILike라는 변수를 만든 다음 배열을 할당

<br>

- map() 함수로 Food컴포넌트 여러개 만들기

```jsx
function Food({ name }) {
  return <h1>I like {name}</h1>
}
function App() {
  return (
    <div>
      {foodILike.map(
        (
          dish // dish에 foodILike배열에 있는 원소가 넘어감
        ) => (
          <Food name={dish.name} /> // Food컴포넌트에 dish props로 넘겨줌
        )
      )}
    </div>
  )
}

export default App
```

![✅6](https://postfiles.pstatic.net/MjAyMTA5MTdfMTQ2/MDAxNjMxODE3Njg4MTY5.5T4yqbnmXVq_vwiMoqJ-96y1qC7Q8kAvLSBmb73OhGsg.APHCTzYpHWgsZ_Ye9ZSyELuBbzn7_vK5mpoxJgkde24g.PNG.charade6/6.PNG?type=w773)

<br>

- Food 컴포넌트에 이미지 출력하기

```jsx
function Food({name, picture}) {
    return (
        <div>                                   // div로 묶어줌
            <h1>I like {name}</h1>
            <img src={picture}>                 // img태그 추가
        </div>
    )
}
function App(){
    return (
        <div>
            {foodILike.map(dish => (
                <Food name={dish.name} picture={dish.image} />       // picture props 전달
            ))}
        </div>
    )
}

export default App
```

![✅7](https://postfiles.pstatic.net/MjAyMTA5MTdfMTgz/MDAxNjMxODE3NzAwMDY0.u9N4FVacijb8mRb14n4LE2Qq5MDoVxF-GA4sBAudqqwg.65KXb2Rlh5uh5vnYag5mbr-wcWmW8KJ9jpvLrXxE96sg.PNG.charade6/7.PNG?type=w773)

<br>

- map()함수의 인자로 함수전달하기

```jsx
function App() {
  return <div>{foodILike.map(renderFood)}</div>
}

function renderFood(dish) {
  // renderFood()함수 정의
  return <Food name={dish.name} picture={dish.image} />
}
// 또는
const renderFood = (dish) => <Food name={dish.name} picture={dish.image} /> // 화살표함수로 정의

export default App
```

> 코드가 길어지면 메인만 보고 함수가 어떤 역할을 하는지 몰라 함수를 거쳐가야 하므로 가독성↓<br>
> 함수보다는 **_컴포넌트로 만들어사용하는것이 일반적_**

<br>

- Food 컴포넌트에 key props 추가하기
  - 리액트의 원소들은 유일한 key prop을 가져야함

```jsx
const foodILike = [
  {
    id: 1, // key prop 추가
    name: "chicken",
    image:
      "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
  },
  {
    id: 2,
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg",
  },
]

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} /> // key props 전달
      ))}
    </div>
  )
}
```

---

## [ 09월 08일 ]

### 리액트 앱 만들기

`create-react-app` : 별다른 개발환경 구축 없이 리액트 개발을 바로 시작할 수 있도록<br/>
프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해 주는 도구

> 명령 프롬프트 또는 VSCode 터미널에서 `npx create-react-app 앱이름` 입력<br/> > _install중 warning이 발생하지만 상관없음_

### 리액트 앱 실행하기, 종료하기

> 터미널에서 `npm start`로 앱 실행<br/> > `Ctrl` + `c`를 누르면 앱 종료

### 리액트 앱 동작 원리

![동작 원리](https://postfiles.pstatic.net/MjAyMTA5MTRfMTM0/MDAxNjMxNTgxNjkzMzQ0.NZ2APinpposV1VWY_oO_5IJjfend4SXFGAreXPqe1fgg.IFVCV4_LBYKC0Mt-QTagxsQ5lTvJZim1-8vwZ5NAowQg.PNG.charade6/%EC%BA%A1%EC%B2%98.PNG?type=w773)

> 리액트는 index.js에 있는 `ReactDOM.render()`를 통해<br/>
> App.js에 있는`<div>Hello React</div>`를 index.html에 삽입해줌

### 컴포넌트 정의

**App.js**<br/>
![컴포넌트 정의](https://blog.kakaocdn.net/dn/KtuLD/btqPyr1EHlC/O0UrCDtBIjeY1L5K8KDdsK/img.jpg)<br/>
function으로 정의 내린 곳을 컴포넌트라고 함

### 컴포넌트 사용

**Index.js**<br/>
![컴포넌트 사용](https://blog.kakaocdn.net/dn/cDMb7C/btqPuUcpoNM/6bsOGsXGRowlx5LcGFPSUk/img.jpg)<br/>
`<App>`을 `ReactDOM.render()` 함수의 첫번째 인자로 전달하면<br/>
App 컴포넌트가 반환하는 것들을 화면에 그릴 수 있음

> _컴포넌트를 사용할때 `<App />`이 아니라 `<App>`라고만하면 오류 발생_<br/> > _리액트는 컴포넌트와 함께 동작하고 리액트 앱은 모두 컴포넌트로 구성됨_
