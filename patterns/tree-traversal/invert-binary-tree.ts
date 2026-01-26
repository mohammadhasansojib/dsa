import TreeNode from "./utils/TreeNode";


function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null;
    
    const queue: TreeNode[] = [root];

    while(queue.length){
        const node = queue.shift()!;

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);

        let tempNode: TreeNode | null = node.left;
        node.left = node.right;
        node.right = tempNode;
    }

    return root;
};