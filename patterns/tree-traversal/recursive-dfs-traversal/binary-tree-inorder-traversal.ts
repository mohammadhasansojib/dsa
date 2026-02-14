import TreeNode from "../utils/TreeNode";

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const inorder = (currentRoot: TreeNode | null) => {
        if(!currentRoot) return;

        inorder(currentRoot.left);
        result.push(currentRoot.val);
        inorder(currentRoot.right);
    }

    inorder(root);

    return result;
};


// leetcode-94