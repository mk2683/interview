// Define the structure of a tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the lowest common ancestor of two nodes in a binary tree
function findLCA(root, node1, node2) {
  // Base case: if the root is null or matches either node1 or node2, return the root
  if (root === null || root === node1 || root === node2) {
    console.log("In Root", root);
    return root;
  }

  // Recursively find LCA in the left and right subtrees
  const leftLCA = findLCA(root.left, node1, node2);
  const rightLCA = findLCA(root.right, node1, node2);

  // If both left and right subtrees contain one of the nodes, root is the LCA
  if (leftLCA !== null && rightLCA !== null) {
    console.log("In LCA", root);
    return root;
  }

  // Otherwise, return the non-null value from left or right subtree
  console.log("In LCA non null", root, leftLCA !== null ? leftLCA : rightLCA);
  return leftLCA !== null ? leftLCA : rightLCA;
}

// Example usage:
// Construct a simple binary tree
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Define the nodes for which we want to find the LCA
const node1 = root.left.right.left; // Node with value 5
const node2 = root.right.right; // Node with value 4

// Find the LCA
const lca = findLCA(root, node1, node2);
console.log(
  `The LCA of node ${node1.value} and node ${node2.value} is node ${lca.value}.`
);
