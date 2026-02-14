import TreeNode from "../utils/TreeNode";

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const postorder = (currentRoot: TreeNode | null) => {
        if(!currentRoot) return;

        postorder(currentRoot.left);
        postorder(currentRoot.right);

        result.push(currentRoot.val);
    }

    postorder(root);

    return result;
};


// leetcode-145