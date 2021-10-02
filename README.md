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
    state
    생명 주기 함수
</details>
<br><br>

## [ 09월 29일 ]
### **prop-types**
전달받은 props의 데이터타입 검사<br><br>

* prop-types 설치하기

>외부모듈이므로 터미널에서  `npm install prop-types` 입력하여 설치

* prop-types 적용하기

`App.js`

```jsx
import PropTypes from 'prop-types' //맨윗줄 추가

Food.propTypes = {
  name: PropTypes.string.isRequired,    // name에 string이라는 자료형이 반드시 필요하다
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}
```
![5주1](https://postfiles.pstatic.net/MjAyMTEwMDJfMjg3/MDAxNjMzMTc0MzIyNDg1.C5c3_cA-E5XOUNyue08UkB8cNkUcLXJycWYENpwZl1kg.nvfhBeAIoVlA8PD7ggirY9mGTPmobzscjLeW_UfvmlMg.PNG.charade6/01.PNG?type=w773)

> 😥**오류발생**💧<br>
❓ rating은 데이터타입이 string이 아니므로 오류발생<br>
🛠 데이터타입을 number로 바꿔주자

```jsx
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number      // 필수x 값이 전달될때는 자료형이 number이여야함
}
```

* [prop-types의 다양한 사용방법(공식문서)](https://github.com/facebook/prop-types)

### **state**

>정적인 데이터 - props 사용<br>
동적인 데이터 - state 사용<br>
***state는 함수형 컴퍼넌트가 아닌 class형 컴포넌트에서 사용***

* class형 컴포넌트 작성

`App.js`

```jsx
import React from 'react'
// 또는 import {Component} from 'react'

class App extends React.Component {
// class App extends Component {
    render() {      // class형 컴포넌트에서는 바로 retern을 사용할수없으므로 render()함수 사용
        return (
            <h1>Hello</h1>
        )
    }
}

export default App
```
![5주2](https://postfiles.pstatic.net/MjAyMTEwMDJfMjQy/MDAxNjMzMTc0MzIyNDg4.FkizCncZaDmxHWFqUuhZd41QbF-qvp_gz27wDdPwwksg.SIN168jFupITcSQRngPI5razERG9_padzeOoRrXpIocg.PNG.charade6/02.PNG?type=w773)

<br>

* state 정의

`App.js`
```jsx
class App extends Component {
    state = {               // state 정의
        count: 0
    }
    render() {
        return (
            <h1>The number is: {this.state.count} </h1>
        )
    }
}
```
![5주3](https://postfiles.pstatic.net/MjAyMTEwMDJfMjU1/MDAxNjMzMTc0MzIyNDkz.qCdPM7pVBUqU5laA6415ZcOGIxfSJgN_rgJsrfC0iYEg.cP1q7tBpR4ICZGTTl-pEzTV_4BFNiGLQcIl8bMXzXVQg.PNG.charade6/03.PNG?type=w773)

<br>

* 버튼으로 count state값 변경하기

`App.js`
```jsx
class App extends Component {
    state = {
        count: 0
    }

    add = () => {
        this.setState({count: this.state.count + 1})
    }

    minus = () => {
        this.setState({count: this.state.count - 1})
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

* 생명주기함수

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
>컴포넌트가 마운트 된 직후에 호출

<br>

2. conponentDidUpdate()
```jsx
componentDidUpdate(){
    console.log('componentDidUpdate')
}
```
![5주6](https://postfiles.pstatic.net/MjAyMTEwMDJfNDkg/MDAxNjMzMTc0MzIyNTU1.0b6KXCh76GjRHktbkuI4RLpFktEbWAvBXu7ujaiCz7sg.Io_jBUkh_5Lwr4F-UFXlkwx92TKjfu_2UHFxFPENl-sg.PNG.charade6/06.PNG?type=w773)
>갱신(렌더)이 일어난 직후 호출되며, 최초 렌더링에서는 호출되지않음

<br>

3. conponentWillUnmount()
```jsx
componentWillUnmount(){
    console.log('componentWillUnmount')
}
```
> 이 함수는 컴포넌트가 화면에서 떠날 때 실행되므로 직접확인하기 어려움

<br>

***

## [ 09월 15일 ]
### 컴포넌트와 JSX
**컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다**<br><br>

* Potato.js추가하여 Potato 컴포넌트 정의

`Potato.js`
```jsx
function Potato() {
    return <h3>I love potato</h3>
}

export default Potato
```
<br>

* Potato 컴포넌트 사용하기

`index.js`
```jsx
import ReactDOM from 'react-dom'
import App from './App'
import Potato from './Potato'

ReactDOM.render(<App /><Potato />, document.getElementById('root'))
```
>😥**오류발생**💧<br>
❓리액트는 최종적으로 단 ***한개의 컴포넌트만*** 그릴수 있음<br>
🛠 App컴포넌트 안에 Potato컴포넌트를 넣어주자

`App.js`
```jsx
import Potato from './Potato'

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Potato />          // 추가
        </div>
    )
}

export default App
```
![✅1](https://postfiles.pstatic.net/MjAyMTA5MTdfMjU5/MDAxNjMxODE3Njg3NjI3.JrGitLxyMBI5I6l7JXTIX0QzKSiPQJ4ZP4q_PpuGiMEg.O2ZX4qs-c9Js6RomkdtItRdUW8CoKAlC0nRAFFDDXvcg.PNG.charade6/1.PNG?type=w773)

<br>

* Potato.js 없이 Potato에 정의한 내용 나타내기

`App.js`
```jsx
function Potato() {             // App.js 내부에 Potato 컴포넌트 작성
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
* ~~컴포넌트 여러 개 사용하기~~

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
>🤔리스트의 내용이 모두 동일

<br>

* props로 컴포넌트에 데이터 전달하기
  - props에는 불리언 값(true, false), 숫자, 배열과 같은 다양한 형태의 데이터를 사용할 수 있음
  - props의 전달 데이터는 문자열인 경우를 제외하면 모두 ***중괄호***로 감싸야 함

`App.js`
```jsx
function Food() {             
    return <h1>I like potato</h1>
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Food fav="kimchi" />       // props 이름인 fav에 kimchi값을 넣어 Food 컴포넌트에 전달
        </div>
    )
}

export default App
```
>Food 컴포넌트에 props를 전달만 하고 사용하지 않았기 때문에 앱에서는 변화없음

<br>

* props.fav를 중괄호로 감싸서 return값에 적용하기

`App.js`
```jsx
function Food(props) {             
    return <h1>I like { props.fav }</h1>
}
```
![✅4](https://postfiles.pstatic.net/MjAyMTA5MTdfMTI4/MDAxNjMxODE3Njg4NDkw.XnEeicp7SS3Vk7g6_8v4Jzpiuzyf0V-VZIYF4MMmaR0g.tP6cFIfR0H9ZxR-2_U2YB4ONqmLhzhQWyZweYTU5-Ywg.PNG.charade6/4.PNG?type=w773)

<br>

* 구조 분해 할당으로 props 사용하기

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
>데이터의 개수가 많아지면 구조 분해 할당을 사용하는 것이 편리함

<br>

* 여러 개의 컴포넌트에 props 사용하기

`App.js`
```jsx
function Food({fav}) {             
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

>🤔여러 개를 직접 입력하는 것은 비효율 적임

<br>

### map() 함수
* 음식 데이터 만들기

`App.js`
```jsx
const foodILike = [
  {
    name: "chicken",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg"
  }
]
```
>서버에서 넘어온 데이터를 저장할 수 있도록 foodILike라는 변수를 만든 다음 배열을 할당

<br>

* map() 함수로 Food컴포넌트 여러개 만들기
```jsx
const foodILike = [{생략}]
function Food({name}) {
    return (
        <h1>I like {name}</h1>
    )
}
function App(){
    return (
        <div>
            {foodILike.map(dish => (            // dish에 foodILike배열에 있는 원소가 넘어감
                <Food name={dish.name} />       // Food컴포넌트에 dish props로 넘겨줌
            ))}
        </div>
    )
}

export default App
```
![✅6](https://postfiles.pstatic.net/MjAyMTA5MTdfMTQ2/MDAxNjMxODE3Njg4MTY5.5T4yqbnmXVq_vwiMoqJ-96y1qC7Q8kAvLSBmb73OhGsg.APHCTzYpHWgsZ_Ye9ZSyELuBbzn7_vK5mpoxJgkde24g.PNG.charade6/6.PNG?type=w773)

<br>

* Food 컴포넌트에 이미지 출력하기
```jsx
const foodILike = [{생략}]
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

* map()함수의 인자로 함수전달하기
```jsx
function App(){
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    )
}

function renderFood(dish){                      // renderFood()함수 정의
    return <Food name={dish.name} picture={dish.image} />
}
// 또는
const renderFood = dish => <Food name={dish.name} picture={dish.image} />   // 화살표함수로 정의

export default App
```

>코드가 길어지면 메인만 보고 함수가 어떤 역할을 하는지 몰라 함수를 거쳐가야 하므로 가독성↓<br>
>함수보다는 ***컴퍼넌트로 만들어사용하는것이 일반적***

<br>

* Food 컴포넌트에 key props 추가하기
    - 리액트의 원소들은 유일한 key prop을 가져야함
```jsx
const foodILike = [
  {
    id: 1,                  // key prop 추가
    name: "chicken",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    id: 2,
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />    // key props 전달
      ))}
    </div>
  );
}
```

***
## [ 09월 08일 ]
### 리액트 앱 만들기
`create-react-app` : 별다른 개발환경 구축 없이 리액트 개발을 바로 시작할 수 있도록<br/>
프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해 주는 도구
>명령 프롬프트 또는 VSCode 터미널에서 `npx create-react-app 앱이름` 입력<br/>
*install중 warning이 발생하지만 상관없음*
### 리액트 앱 실행하기, 종료하기
>터미널에서 `npm start`로 앱 실행<br/>
`Ctrl` + `c`를 누르면 앱 종료

### 리액트 앱 동작 원리

![동작 원리](https://postfiles.pstatic.net/MjAyMTA5MTRfMTM0/MDAxNjMxNTgxNjkzMzQ0.NZ2APinpposV1VWY_oO_5IJjfend4SXFGAreXPqe1fgg.IFVCV4_LBYKC0Mt-QTagxsQ5lTvJZim1-8vwZ5NAowQg.PNG.charade6/%EC%BA%A1%EC%B2%98.PNG?type=w773)

>리액트는 index.js에 있는 `ReactDOM.render()`를 통해<br/>
App.js에 있는`<div>Hello React</div>`를 index.html에 삽입해줌

### 컴포넌트 정의
**App.js**<br/>
![컴포넌트 정의](https://blog.kakaocdn.net/dn/KtuLD/btqPyr1EHlC/O0UrCDtBIjeY1L5K8KDdsK/img.jpg)<br/>
function으로 정의 내린 곳을 컴포넌트라고 함
### 컴포넌트 사용
**Index.js**<br/>
![컴포넌트 사용](https://blog.kakaocdn.net/dn/cDMb7C/btqPuUcpoNM/6bsOGsXGRowlx5LcGFPSUk/img.jpg)<br/>
`<App>`을 `ReactDOM.render()` 함수의 첫번째 인자로 전달하면<br/>
App 컴포넌트가 반환하는 것들을 화면에 그릴 수 있음
>*컴포넌트를 사용할때 `<App />`이 아니라 `<App>`라고만하면 오류 발생*<br/>
*리액트는 컴포넌트와 함께 동작하고 리액트 앱은 모두 컴포넌트로 구성됨*