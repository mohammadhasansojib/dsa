import TreeNode from "./utils/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];

    const result: number[][] = [];
    let queue: TreeNode[] = [root];

    while(queue.length){
        let levelLength = queue.length;
        let level: number[] = [];

        for(let i = 0; i < levelLength; i++){
            let node = queue.shift()!;

            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};