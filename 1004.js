// 1. JSON 객체 (JavaScript Object Notation = 자바스크립트 객체 표기법(기호))

// - JS에서 기본적으로 제공하는 내장 객체로 JS의 '객체'처럼 자료를 표현하는 방식
// - 현재 가장 많이 사용되는 자료 표현 방식

// - ▼ 사용 규칙 ▼
// - a. 값 표현은 문자열, 숫자, 불 자료형만 사용(함수X)
// - b. 문자열은 반드시 큰따옴표로 만들기
// - c. 키(KEY)에도 반드시 따옴표 붙이기
// 

// 예제
// JSON.stringfy(): 객체를 문자열로 변환
// const arr1 = [{
//   'name': 'Javascript',
//   'price': 20000,
//   'publisher': '한빛미디어'
// }, {
//   'name': 'Java',
//   'price': 23000,
//   'publisher': '한빛미디어'
// }];

// console.log(JSON.stringify(arr1));
// console.log(JSON.stringify(arr1, null, 2));
// console.log(JSON.stringify(arr1, null, 4));

// //JSON.parse(): 객체를 전개하는 방식
// const arr2 = [{
//   'name': 'Javascript',
//   'price': 20000,
//   'publisher': '한빛미디어'
// }, {
//   'name': 'Java',
//   'price': 23000,
//   'publisher': '한빛미디어'
// }, {
//   'name': 'Python',
//   'price': 17000,
//   'publisher': '한빛미디어'
// }];

// const json = JSON.stringify(arr2);
// console.log(json);
// console.log(JSON.parse(json));



// 2. Math 객체

// - 수학과 관련된 기본적인 연산을 할 때 사용 Math.PI, Math.E 등
// console.log(Math.PI)
// console.log(Math.E)

// - Math.sin(), Math.cos(), Math.tan() 등의 삼각함수도 있음 인자 값으로 라디안 값이 들어감
// - 삼각함수에서 1은 1라디안을 말하며 라디안 각도 = 각도 * 3.14 / 180 (1라디안 = 57.29589)

// - 랜덤한 숫자 생성
// - Math.random()
// const num = Math.random()

// console.log(`0 ~ 1사이의 랜덤한 숫자 ${num}`)
// console.log(`0 ~ 100사이의 랜덤한 숫자 ${num * 100}`)
// console.log(`-5 ~ 5사이의 랜덤한 숫자 ${num * 10 - 5}`)
// console.log(`-5 ~ 5사이의 랜덤한 정수 숫자 ${Math.floor(num * 10 - 5)}`) // floor 알고리즘 때 본 적 있을 거에요




// 3. Lodash (Low Dash) 라이브러리

// CDN (Contents Delivery Network)이란?
// 데이터 창고를 두고 가까운 곳에서 받아올 수 있도록 하기 위함
// (제일 가까운 곳이 문제 생기면 그 다음 가까운 곳에서 받아옴)