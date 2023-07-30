/**
 * 
 * @param {*} array 
 * @param {*} size 
 * @returns A new Array of Arrays. Each sub-Array has a length equal to size. Remaining elements are gathered into a final sub-Array.
 * chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]
chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
chunk([false, true, false, true], 3);
// -> [[false, true, false], [true]]
chunk([], 7);
// -> []
 */

function chunk(array, size) {
    const arr = [];
    for (let i = 0; i < array.length; i += size) {
      arr.push(array.slice(i, i + size));
    } return arr;
  }

