# 장지원 [201640133]
2주차 [21.09.08 - 리액트로 클론 코딩 시작하기](https://github.com/charade6/movie_app_2021/blob/master/README.md#-09%EC%9B%94-08%EC%9D%BC-)
<details><summary></summary>
    <div markdown="1">

    리액트 앱 만들기
    리액트 앱 실행하기, 종료하기
    리액트 동작 원리
    컴포넌트 정의
</details>

3주차 [21.09.15](#)
<details><summary></summary>
    <div markdown="1">


</details>
<br/>

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

![동작 원리](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3dbaab6f-c406-440e-9b01-4a23ad4f9f9f/%EC%BA%A1%EC%B2%98.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210909T173051Z&X-Amz-Expires=86400&X-Amz-Signature=a3bd12cde88bf20279fccaf8033928e5c4e1bba96cb2541b32b6def8c7919a8a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25BA%25A1%25EC%25B2%2598.PNG.png%22)

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