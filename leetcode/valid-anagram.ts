/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  // here we add a score of every letter to the map
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  // here we check that every letter exists in the map, returning false if finding undefined
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      return false;
    } else {
      map[t[i]]--;
    }
  }
  //return true if no inconsistencies in second loop
  return true;
};
