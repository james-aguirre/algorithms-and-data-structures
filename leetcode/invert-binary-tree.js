var invertTree = function (root) {
  if (!root) return null;
  let rootLeft = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};