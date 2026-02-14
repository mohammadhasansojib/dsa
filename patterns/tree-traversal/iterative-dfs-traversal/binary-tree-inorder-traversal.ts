import TreeNode from "../utils/TreeNode"


function inorderTraversal(root: TreeNode | null): number[] {
    
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while(current || stack.length){
        if(current){
            stack.push(current);
            current = current.left;
        }else{
            let node = stack.pop()!;
            result.push(node.val);
            current = node.right;
        }
    }

    return result;
};


// leetcode-94