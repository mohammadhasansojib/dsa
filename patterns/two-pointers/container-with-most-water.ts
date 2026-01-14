function maxArea(height: number[]): number {
    let left = 0, right = height.length-1;

    let answer = 0;

    while(left < right){
        let area = (right-left) * Math.min(height[left] as number, height[right] as number);

        answer = Math.max(answer, area);

        if((height[left] as number) > (height[right] as number)) right--;
        else left++;
    }

    return answer;
    
};