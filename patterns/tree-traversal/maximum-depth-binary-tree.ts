import TreeNode from "./utils/TreeNode";

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    
    const stack: [TreeNode | null, number][] = [[root, 1]];
    let res = 0;

    while(stack.length){
        let [node, depth] = stack.pop()!;

        if(node){
            res = Math.max(res, depth);
            stack.push([node.left, depth+1]);
            stack.push([node.right, depth+1]);
        }
    }

    return res;
    
};