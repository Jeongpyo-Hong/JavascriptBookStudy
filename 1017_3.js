// 2. static 속성과 메소드

// static 속성, static 메소드라는 것이 최근 추가된 문법인데,
// 정적 속성, 정적 메소드라고 부르기도 합니다.

// static 속성과 메소드는 인스턴스를 만들지 않아도 되기 때문에,
// 일반적인 변수 혹은 함수처럼 사용할 수 있습니다.

class Square {
  #length;
  static #counter = 0;
  static get counter() {
    return Square.#counter;
  }

  constructor(length) {
    this.length = length;
    Square.#counter += 1;
  }

  static perimeterOf(length) {
    return length * 4;
  }

  static areaOf(length) {
    return length * length;
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

const SquareA = new Square(10);
const SquareB = new Square(20);
const SquareC = new Square(30);

console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}개 입니다.`);

// static 메소드를 사용해보면,
// 아래와 같이 Square 객체를 생성하지 않고도
// 바로 'Square' 클래스에 접근하여 둘레와 넓이를 구할 수 있게 됩니다.
console.log(
  `한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`
);
console.log(
  `한 변의 길이가 30인 정사각형의 면적은 ${Square.areaOf(30)}입니다.`
);
