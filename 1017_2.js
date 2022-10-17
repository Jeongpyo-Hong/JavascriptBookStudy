// 게터(getter): 속성 값을 확인할 때 사용하는 메소드
// 세터(setter): 속성에 값을 지정할 때 사용하는 메소드

// 방금 살펴본 게터와 세터는 get, set 키워드 문법을 기본으로 제공하는데,
// 두 키워드를 조합하여 코드를 작성해보겠습니다.

class Square {
  #length;

  constructor(length) {
    this.length = length;
  }

  get length() {
    return this.#length;
  }

  get perimeter() {
    return this.#length * 4;
  }

  get area() {
    return this.#length * this.#length;
  }

  set length(length) {
    if (length <= 0) {
      throw "길이는 0보다 커야 합니다.";
    }
    this.#length = length;
  }
}

// 이전 예제와는 다르게 간단하게 '.'을 붙여서 속성을 사용하는 형태로 게터와 세터를 사용할 수 있습니다.
const squareA = new Square(10);

console.log(`한 변의 길이: ${squareA.length}`);
console.log(`둘레: ${squareA.perimeter}`);
console.log(`면적: ${squareA.area}`);

// 예외를 발생시켜보면,
// const squareB = new Square(-10);
