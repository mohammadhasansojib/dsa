const maxSubArray = (nums: number[]): number => {
    let maxSum = nums[0];
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i] as number;

        if(maxSum as number < currentSum) maxSum = currentSum;

        if(currentSum < 0) currentSum = 0;
    }

    return maxSum as number;
}
