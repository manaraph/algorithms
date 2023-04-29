// run `node fizzbuzz.js` from your terminal

/**
 * A simple FizzBuzz function
 * @return “Fizz” for multiples of 3, “Buzz” for multiples of 5, and
 * “FizzBuzz” for multiples of both 3 and 5 in a sequence of integers from 1 to 100.
 * @example 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz….
 */
(() => {
  for (let number = 1; number <= 100; number++) {
    console.log((number % 3 ? '' : 'Fizz') + (number % 5 ? '' : 'Buzz') || number);
  }
})();
