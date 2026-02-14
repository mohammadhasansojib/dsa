import TreeNode from "../utils/TreeNode"


function postorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];
    
    const result = [];
    const stack: TreeNode[] = [root];
    
    while(stack.length){
        let node = stack.pop()!;

        result.push(node.val);

        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }

    result.reverse();

    return result;
};


// leetcode-145