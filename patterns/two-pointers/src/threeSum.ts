function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);

    let triplets: number[][] = [];

    for(let i = 0; i < nums.length-2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i+1, right = nums.length-1;

        while(left < right){
            let sum = (nums[i] as number) + (nums[left] as number) + (nums[right] as number);

            if(sum === 0){
                triplets.push([nums[i] as number, nums[left] as number, nums[right] as number]);

                left++;
                right--;

                while(left < right && nums[left] === nums[left-1]) left++;
                while(left < right && nums[right] === nums[right+1]) right--;
            }
            else if(sum < 0){
                left++;
            }
            else{
                right--;
            }
        }
    }

    return triplets;
};