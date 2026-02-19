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
root.right.left = new Tree(7);
root.right.right = new Tree(10);
root.left.left.left = new Tree(0);

function checkBST(root, min = null, max = null) {
  if (!root) {
    return true;
  } else if ((!!min && root.value < min) || (!!max && root.value > max)) {
    return false;
  }

  return (
    checkBST(root.left, min, root.value) &&
    checkBST(root.right, root.value, max)
  );
}

const result = checkBST(root);

console.log(result);
