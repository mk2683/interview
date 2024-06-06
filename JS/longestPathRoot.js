// Definition of a binary tree node
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the longest path from the root node in a binary tree
function longestPathFromRoot(root) {
  if (!root) {
    return 0; // Base case: empty tree or leaf node
  }
  let maxDepth = 0;
  // Helper function to perform DFS traversal and track maximum depth
  function dfs(node, depth) {
    if (!node) {
      return depth; // Return current depth if node is null
    }

    if (depth > maxDepth) {
      maxDepth = depth;
    }

    // Recursively traverse left and right subtrees
    const leftDepth = dfs(node.left, depth + 1);
    const rightDepth = dfs(node.right, depth + 1);

    // Return the maximum depth encountered in the subtree
    return maxDepth;
  }

  // Start DFS traversal from the root node with initial depth 1
  return dfs(root, 1);
}

// Example usage:

// Construct a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.left = new TreeNode(7);

// Calculate the longest path from the root node
const longestPathLength = longestPathFromRoot(root);
console.log("Longest Path from Root:", longestPathLength); // Output: Longest Path from Root: 4
