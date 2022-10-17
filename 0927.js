// 윤년 정확한 의미는 이렇대요.
// 한국법에서는, "윤년"이란 그레고리력에서 여분의 하루인 2월 29일을 추가하여 1년 동안 날짜의 수가 366일이 되는 해
// 지구가 태양을 한 바퀴 도는 공전주기는 365.25일이기 때문에
// 400년마다 윤년을 97회 오게 해서 달력이 실제 1년보다 길어지는 현상을 없앴다.

// 1. 윤년을 확인하는 함수 만들기
function isLeapYear(year) { // JS에서는 대개 조건부연산자 이름을 'is☆☆☆☆' 라는 식으로 만듦 ('true' or 'false' 반환)
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`); // 
// 1. ()
// 2. 단항 연산자 ( --, ++, ! )
// 3. 산술 연산자 ( *, /, %, +, - )
// 4. 비교 연산자 ( >, >=, <, <=, ==, ===, !==, != )5. 논리 연산자 ( &&, || )
// 5. 대입(복합 대입) 연산자 ( =, +=, -=, *=, /=, %= )
// 노션 링크 참고


//2. a부터 b까지 곱하는 함수
function sumAll(a, b) {
  let output = 1; // 초기값이 0으로 시작하면 곱하였을 때 무조건 0이므로, 초기값을 1로 시작
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}

console.log(`a부터 b까지 곱하면 ${sumAll(2, 5)}`);



// 3. 최댓값을 찾는 함수 -1
function max(items1) {
  let output = items1[0]; // 10
  for (const item of items1) {
    if (output < item) { // item이 output보다 크면,
      output = item;
    }
  }
  return output;
}

const testArray1 = [10, 20, 30, 40, 100, 50, 70]; // ...testArray1 >>> (10, 20, 30)
console.log(`최댓값 = ${max(testArray1)}`);
// Math.max(...testArray1) 메서드로도 최댓값을 찾을 수 있음
// 노션 링크 참고



// 4. 나머지 매개변수를 사용한 min() 함수
// Spread Operator는 '...arr'과 같은 표현식이며, 배열 arr의 모든 요소를 나열하여 인자로 전달
function min(...items) { // [5, 7, 9, 3, 1]
  let output = items[0];
  for (const item of items) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

console.log(`최솟값 = ${min(5, 7, 9 ,3 ,1)}`)



// 5. 매개변수의 자료형에 따라 다르게 작동하는 min() 함수
// 배열의 경우 타입을 검사할 때 Array.isArray() 메서드 활용
function min(first, ...rests) {
  let output;
  let items;

  if (Array.isArray(first)) { // 타입이 배열이면
    output = first[0];
    items = first;
  } else if (typeof(first) === 'number') { // 타입이 숫자이면
    output = first;
    items = rests;
  }
  for (const item of items) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

console.log(`min(배열): ${min([10, 20, 30, 5, 7])}`)
console.log(`min(숫자, ...): ${min(10, 20, 30, 5, 7)}`)