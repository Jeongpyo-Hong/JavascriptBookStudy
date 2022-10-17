// toString()  메소드 오버라이드하기

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `이름: ${this.name}\n나이: ${this.age}살`;
  }
}
const pet = new Pet("구름", 6);

// 'alert()' 함수는 매개변수로 받은 자료를 문자열로 바꿔서 출력합니다.
alert(pet);

// 문자열 결합 연산자로 인해, 'toString()' 메소드의 리턴값을 출력합니다.
console.log(pet + "");
