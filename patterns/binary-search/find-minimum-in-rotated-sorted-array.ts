function findMin(nums: number[]): number {
    let left = 0, right = nums.length-1;
    let minElement = nums[0];

    while(left <= right){
        let middle = Math.floor((right+left)/2);

        if(minElement as number > (nums[middle] as number))
            minElement = nums[middle];

        if(nums[0] as number <= (nums[middle] as number)) left = middle+1;
        else right = middle-1;
    }

    return minElement as number;
};

