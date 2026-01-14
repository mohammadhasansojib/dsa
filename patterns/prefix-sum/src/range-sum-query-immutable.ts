class NumArray{
    prefix: number[] = [0];

    constructor(nums: number[]){
        for(let i = 0; i < nums.length; i++){
            let sum = this.prefix[i] as number + (nums[i] as number);
            this.prefix.push(sum);
        }
    }

    sumRange(left: number, right: number): number{
        let sum = this.prefix[right+1] as number - (this.prefix[left] as number);
        return sum;
    }
}

/**
 * NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */