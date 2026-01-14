function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    let indices: [number, number] = [-1, -1];

    for(let i = 0; i < nums.length; i++){
        if(map.has(target-(nums[i] as number))){
            indices = [map.get(target-(nums[i] as number)) as number, i];
            break;
        }

        if(!map.has(nums[i] as number)) map.set(nums[i] as number, i);
    }

    return indices;
};