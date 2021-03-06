/**
 * # OOP 추상화(abstraction)
 * - 외부에서는 내부의 복잡한 구조는 신경쓰지 않고,
 *   객체의 속성과 행동만을 빼 놓고 보는 것이 추상화이다.
 * - 대표적으로 interface가 추상화이다.
 */

/**
 * ex) 커피머신
 *  사용자는 커피머신 내부에서 어떠한 동작으로 커피가 나오는지 알지 못한다.
 *  하지만 커피머신에서 제공하는 interface 즉, 버튼을 통하여 커피를 제공 받을 수 있다.
 *
 * - 커피포트, 에스프레소_머신, 캡슐커피_머신이 있다.
 * - 이 세가지 머신은 각각 커피를 추출하는 방법(내부동작)이 다르다.
 * - 하지만 세가지 머신은 추상회된 커피머신 인터페이스를 구현한다.
 * - 그렇기 때문에 사용자는 커피머신이라는 인터페이스를 통해
 * - 어떠한 머신인지 상관없이 동일한 "커피추출"이라는 행동으로 커피를 받을 수 있게 된다.
 * - 이것이 추상화의 사용 예시이다.
 */
{
  class 커피 {}

  interface 커피머신 {
    커피추출(): 커피;
  }

  class 커피포트 implements 커피머신 {
    커피추출(): 커피 {
      console.log('커피 포트에서 커피를 추출 합니다.');
      return new 커피();
    }
  }

  class 에스프레소_머신 implements 커피머신 {
    커피추출(): 커피 {
      console.log('에스프레소 머신에서 커피를 추출 합니다.');
      return new 커피();
    }
  }

  class 캡슐커피_머신 implements 커피머신 {
    커피추출(): 커피 {
      console.log('캡슐커피 머신에서 커피를 추출 합니다.');
      return new 커피();
    }
  }
}
