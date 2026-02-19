function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        let num = nums[mid];

        if(num === target) return mid;

        if(num > target) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};

// leetcode-35