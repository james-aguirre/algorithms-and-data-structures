/**
 * @param {string}
 * check is a string is a valid palindrome, return true if it is, else return false
 */

function isPalindrome(str: string): boolean {
  return str.split('').reverse().join('') === str;
}
