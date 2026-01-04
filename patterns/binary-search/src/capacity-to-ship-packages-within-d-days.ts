function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let answer = right;

    while(left <= right){
        let middle = Math.floor((left+right)/2);

        let w = 0;
        let dayCount = 0;

        for(const weight of weights){
            w += weight;

            if(w > middle){
                dayCount++;
                w = weight;
            }
        }

        dayCount++;

        if(dayCount <= days){
            answer = middle;
            right = middle-1;
        }else{
            left = middle+1;
        }

    }

    return answer;
};