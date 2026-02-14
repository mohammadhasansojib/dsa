import TreeNode from "./utils/TreeNode";

function countNodes(root: TreeNode | null): number {
    if(!root) return 0;

    function count(root: TreeNode | null): number{
        if(!root) return 0;

        let leftHeight = 1, rightHeight = 1;
        let currentLeft = root.left;
        let currentRight = root.right;

        while(currentLeft){
            currentLeft = currentLeft.left;
            leftHeight++;
        }
        while(currentRight){
            currentRight = currentRight.right;
            rightHeight++;
        }

        if(leftHeight === rightHeight) return Math.pow(2,rightHeight) - 1;
        else return 1 + count(root.left) + count(root.right); 
    }

    return count(root);
};

// leetcode-222