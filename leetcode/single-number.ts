/** 
 * Given a non-empty array of integers nums, every element appears twice except for one.
 *  Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1 */

// original solution
// function singleNumber(nums: number[]): number {
//   let map = new Map();
//   nums.forEach((num) => {
//     if (map.has(num)) {
//       map.delete(num);
//     } else {
//       map.set(num, 1);
//     }
//   });
//   return +Object.keys(Object.fromEntries(map))[0];
// }

/**
 * better answer below, with XOR operator any number repeated will cancel itself out to 0 ( 4 ^ 4 = 0),
 * and setting the second argument of the reduce method
 *  to 0 eliminates all repeated numbers from the array, since they calculate to 0.
 * Time complexity results to 0(n) and space complexity results to 0(1)
 *
 * */
function singleNumber(nums: number[]): number {
  return nums.reduce((prev, val) => prev ^ val, 0);
}
