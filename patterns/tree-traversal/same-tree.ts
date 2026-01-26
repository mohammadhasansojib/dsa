import TreeNode from "./utils/TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q) return true;

    const queue: [TreeNode | null, TreeNode | null][] = [[p,q]];

    for(const [n1, n2] of queue){
        if(!n1 && !n2) continue;
        if(!n1 && n2 || n1 && !n2) return false;
        if(n1?.val !== n2?.val) return false;

        let nodes: [TreeNode | null, TreeNode | null] = [null, null];

        if(n1?.left || n2?.left){
            if(n1?.left) nodes[0] = n1.left;
            if(n2?.left) nodes[1] = n2.left;

            queue.push(nodes);
        }

        nodes = [null, null];

        if(n1?.right || n2?.right){
            if(n1?.right) nodes[0] = n1.right;
            if(n2?.right) nodes[1] = n2.right;

            queue.push(nodes);
        }
    }

    return true;
};