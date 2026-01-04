function minEatingSpeed(piles: number[], h: number): number {

    let left = 1, right = Math.max(...piles);
    let answer = right;

    while(left <= right){
        let hour = 0;
        let middle = Math.floor((right+left)/2);

        for(const pile of piles){
            hour += Math.ceil(pile/middle);
        } 

        if(hour <= h){
            answer = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    
    return answer;
};