import TreeNode from "./utils/TreeNode";


function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true;

    const isMirror: (node1: TreeNode | null, node2: TreeNode | null) => boolean = (node1: TreeNode | null, node2: TreeNode | null) => {
        if(!node1 && !node2) return true;
        if(!node1 && node2 || node1 && !node2) return false;

        if(node1?.val !== node2?.val) return false;
        
        return isMirror((node1 as TreeNode).left, (node2 as TreeNode).right) && isMirror((node1 as TreeNode).right, (node2 as TreeNode).left);
    }

    return isMirror(root.left, root.right);
};


// leetcode-101