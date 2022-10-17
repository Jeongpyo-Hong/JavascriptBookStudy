// 3. 오버라이드

// 부모가 갖고 있는 함수를 자식에서 다시 선언하여 덮어쓰는 것을 '오버라이드'라고 합니다.

class LifeCycle {
  call() {
    this.a();
    this.b();
    this.c();
  }

  a() {
    console.log("a() 메소드를 호출합니다.");
  }
  b() {
    console.log("b() 메소드를 호출합니다.");
  }
  c() {
    console.log("c() 메소드를 호출합니다.");
  }
}

// 오버라이드
class Child extends LifeCycle {
  a() {
    super.a(); // 'super'를 사용하여 부모의 a() 메소드를 출력합니다.
    console.log("자식의 a() 메소드 입니다.");
  }
}

new Child().call();
