class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Function to find the path from root to a given node
function findPath(root, path, k) {
  if (root === null) return false;

  path.push(root.val);

  if (root.val === k) return true;

  if (
    (root.left && findPath(root.left, path, k)) ||
    (root.right && findPath(root.right, path, k))
  ) {
    return true;
  }

  path.pop();
  return false;
}

// Function to find the LCA of two given nodes n1 and n2
function findLCA(root, n1, n2) {
  if (root === null) return null;

  if (root.val === n1 || root.val === n2) return root;

  let leftLCA = findLCA(root.left, n1, n2);
  let rightLCA = findLCA(root.right, n1, n2);

  if (leftLCA && rightLCA) return root;

  return leftLCA !== null ? leftLCA : rightLCA;
}

// Function to find the path between two nodes
function findPathBetweenNodes(root, n1, n2) {
  let lca = findLCA(root, n1, n2);

  if (lca === null) return null;

  let path1 = [];
  findPath(lca, path1, n1);

  let path2 = [];
  findPath(lca, path2, n2);

  path2.shift(); // Remove the first element to avoid duplication of LCA

  return path1.reverse().concat(path2);
}

// Example usage:

// Construct the binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Find path between nodes 4 and 5
let path = findPathBetweenNodes(root, 4, 5);
console.log(path); // Output: [4, 2, 5]

// Find path between nodes 4 and 6
path = findPathBetweenNodes(root, 4, 6);
console.log(path); // Output: [4, 2, 1, 3, 6]
