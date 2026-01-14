const subarraySum = (nums: number[], k: number): number => {

    let count = 0;
    
    const prefix = new Map<number, number>();
    prefix.set(0, 1);
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i] as number;

        if(prefix.has(sum - k)) count += prefix.get(sum - k) as number;

        if(!prefix.has(sum)) prefix.set(sum, 1)
        else prefix.set(sum, prefix.get(sum) as number + 1)
    }
    

    return count;
}