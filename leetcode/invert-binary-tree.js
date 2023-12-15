/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *     Input: root = [4,2,7,1,3,6,9]
 *     Output: [4,7,2,9,6,3,1]
 *
 *     Input: root = [2,1,3]
 *     Output: [2,3,1]
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  // I asume since fuctions are hoisted, we must be able to call invertTree before it is defined ??
  // fascinating
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
