/**
 * Q) Let's make a calculator ๐งฎ
 */
{
  type CalculateMode = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  /**
   * My Answer
   * @param mode
   * @param x
   * @param y
   * @returns
   */
  function calculate(mode: CalculateMode, x: number, y: number): number {
    const calculate = getCalculate(mode);
    return calculate(x, y);

    function getCalculate(mode: CalculateMode): Function {
      return {
        add: function (x: number, y: number) {
          return x + y;
        },
        substract: function (x: number, y: number) {
          return x - y;
        },
        multiply: function (x: number, y: number) {
          return x * y;
        },
        divide: function (x: number, y: number) {
          return x / y;
        },
        remainder: function (x: number, y: number) {
          return x % y;
        },
      }[mode];
    }
  }

  type Commend = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  /**
   * Ellie Answer
   * @param commend
   * @param a
   * @param b
   * @returns
   */
  function calculate2(commend: Commend, a: number, b: number): number {
    switch (commend) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      case 'remainder':
        return a % b;
      default:
        throw new Error(`[calculate] unknwon command - ${commend}`);
      /* 
        Q) Union ํ์์ผ๋ก ์ฒ๋ฆฌํ์์๋ default์์ ์๋ฌ๋ฅผ ์ฒ๋ฆฌํ๋ ์ด์ ?
        A) ๋ฏธ๋์ Commend์ ํ์์ด ์ถ๊ฐ๋๋ ๊ฒฝ์ฐ๋ฅผ ์ํจ์ด๋ค.
        ์๋ฅผ ๋ค์ด ์ฒ์ ์ ์๋ Commend ํ์์ ๋ช๋ฌ ๋ค ์๋ก์ด ํ์์ด ์ถ๊ฐ๋๋ค๋ฉด?
        ํ์์ด ์ถ๊ฐ ๋์๋ค๋ฉด ํด๋น ํ์์ ์ฌ์ฉํ๋ ๋ชจ๋  ๊ณณ์ ๋์์ ํด์ผํ๋ค.
        ์ด๋ ๊ฐ๋ฐ์๊ฐ calculate2์ ์ถ๊ฐ๋ ํ์์ ๋ํ case๋ฌธ์ ๋ง๋ค์ง ์๋๋ค๋ฉด
        ์ด ๊ฒฝ์ฐ default๋ฌธ์ด ์คํ๋  ๊ฒ์ด๋ค. 
        ๊ทธ๋ฆฌ๊ณ  ๋์ ์ง ์๋ฌ ๋ฉ์ธ์ ๋ฅผ ํตํด ์ค๋ฅ๋ฅผ ํ์ํ๊ณ  ๋์ํ  ์ ์๊ฒ ๋๋ค.
      */
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
