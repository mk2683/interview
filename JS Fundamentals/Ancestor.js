class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Tree(5);
root.left = new Tree(3);
root.right = new Tree(9);
root.left.left = new Tree(1);
root.left.right = new Tree(4);
root.right.left = new Tree(11);
root.right.right = new Tree(10);
root.left.left.left = new Tree(23);

function findAncestor(root, node1, node2) {
  if (root == null || root == node1 || root == node2) {
    return root;
  }

  const leftSide = findAncestor(root.left, node1, node2);
  const rightSide = findAncestor(root.right, node1, node2);

  if (leftSide && rightSide) {
    return root;
  } else if (leftSide) {
    return leftSide;
  } else {
    return rightSide;
  }
}

const result = findAncestor(root, root.left.right, root.left.left.left);

console.log(result.value);
