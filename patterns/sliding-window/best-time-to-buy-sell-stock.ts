const maxProfit = (prices: number[]): number => {

    let maxProfit = 0, lowestPrice = prices[0];
    
    for(const p of prices){
        if(p < (lowestPrice as number)) lowestPrice = p;

        let profit = p - (lowestPrice as number);
        if(maxProfit < profit) maxProfit = profit;
    }

    return maxProfit;

}