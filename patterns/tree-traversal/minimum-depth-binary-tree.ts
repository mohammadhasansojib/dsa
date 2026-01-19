import TreeNode from "./utils/TreeNode";

function minDepth(root: TreeNode | null): number {
    if(!root) return 0;

    const queue: TreeNode[][] = [[root]];
    let level = 1;

    for(const nodes of queue){
        let subQueue: TreeNode[] = [];
        for(const node of nodes){
            if(!node.left && !node.right) return level;
            
            if(node.left) subQueue.push(node.left);
            if(node.right) subQueue.push(node.right);
        }
        queue.push(subQueue);
        level++;
    }

    return Infinity;
};