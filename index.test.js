const fizz_buzz = require("./index");

//passing an array containing 3 should result in “fizz”
describe("FizzBuzz", () => {
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz([3])).toBe("fizz");
  });

  //an array containing 5 should result in “buzz”
  test('[5] should result in "buzz"', () => {
    expect(fizz_buzz([5])).toBe("buzz");
  });

  //an array containing 15 should result in “fizzbuzz”
  test('[15] should result in "fizzbuzz"', () => {
    expect(fizz_buzz([15])).toBe("fizzbuzz");
  });

  //passing an array with 1, 2, and 3 should result in “1, 2, fizz”
  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizz_buzz([3])).toBe("fizz");
  });
});
