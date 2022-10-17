// 1. 게터와 세터

// 앞서 '#' 기호를 사용하여 외부에서 접근하지 못하도록 하는 방법을 배웠습니다.
// 이번엔 getter, setter에 대해 알아보겠습니다.

class Square {
  #length;

  constructor(length) {
    this.setLength(length);
  }

  setLength(value) {
    if (value <= 0) {
      throw "길이는 0보다 커야 합니다.";
    }
    this.#length = value;
  }
  getLength(value) {
    return this.#length;
  }

  getPerimeter() {
    return 4 * this.#length;
  }
  getArea() {
    return this.#length * this.#length;
  }
}

const square = new Square(10);

console.log(`한 변의 길이는 ${square.getLength()}입니다.`);

// 예외를 발생 시켜보면,
square.setLength(-10);
