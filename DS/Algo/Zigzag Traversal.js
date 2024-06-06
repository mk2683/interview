/* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {

    var results = [];

    const traverse = (root, level) => {

        if(!root) return;

        if(results[level]) results[level].push(root.val);
        else results[level] = [root.val];

        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
    }

    traverse(root, 0);
    
    return results.map((b, i) => i % 2 ? b.reverse() : b );
    
};

const result = zigzagLevelOrder([3,9,20,null,null,15,7]);
console.log(result);