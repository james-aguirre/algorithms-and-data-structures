/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.
 */

function solution(inputArray: number[]): number {
  let max: number = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    max = Math.max(max, inputArray[i] * inputArray[i + 1]);
  }

  return max;
}
