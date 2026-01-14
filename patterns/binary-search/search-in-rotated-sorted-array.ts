function search(nums: number[], target: number): number {
    let left = 0, right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((right+left)/2);

        if(target === nums[mid]) return mid;

        if(nums[left] as number <= (nums[mid] as number)){
            if(nums[left] as number <= target && target < (nums[mid] as number))
                right = mid - 1;
            else
                left = mid + 1;
        }else{
            if(nums[mid] as number < target && target <= (nums[right] as number))
                left = mid + 1;
            else
                right = mid - 1;
        }
    }

    return -1;
};