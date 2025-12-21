function minSubArrayLen(target: number, nums: number[]): number {

    let minLen = Infinity;
    let left = 0;
    let sum = 0;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right] as number;

        while(sum >= target){
            minLen = Math.min(minLen, (right+1)-left);
            sum -= nums[left] as number;
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
    
};