import TreeNode from "../utils/TreeNode";


function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const preorder = (currentRoot: TreeNode | null) => {
        if(!currentRoot) return;

        result.push(currentRoot.val);
        preorder(currentRoot.left);
        preorder(currentRoot.right);
    }

    preorder(root);

    return result;
};


// leetcode-144