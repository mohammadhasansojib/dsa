import TreeNode from "../utils/TreeNode"



function preorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];

    const result: number[] = [];
    const stack: TreeNode[] = [root];

    while(stack.length){
        let node = stack.pop()!;

        result.push(node.val);

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return result;
};


// leetcode-144