/** 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const validParenthesis = { ')': '(', '}': '{', ']': '[' };
  for (let i = 0; i < s.length; i++) {
    if (stack.length < 1) stack.push(s[i]);
    else if (stack[stack.length - 1] !== validParenthesis[s[i]]) {
      stack.push(s[i]);
    } else stack.pop();
  }
  return !(stack.length > 0);
}
