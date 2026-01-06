const topKFrequent = (nums: number[], k: number): number[] => {
    const answer: number[] = [];

    const freq = new Map<number, number>();

    for(const n of nums){
        if(!freq.has(n)) freq.set(n, 1);
        else freq.set(n, (freq.get(n) as number)+1);
    }

    let max = Math.max(...(Array.from(freq.values())));

    const bucket = new Array(max+1);

    let keys = Array.from(freq.keys());

    for(let i = 0; i < freq.size; i++){
        let index = freq.get(keys[i] as number);

        if(!bucket[index as number]){
            bucket[index as number] = [keys[i]];
        }else{
            bucket[index as number].push(keys[i]);
        }
    }

    let count = k;
    outer:
    for(let i = bucket.length-1; i >= 0; i--){
        if(bucket[i]){
            for(let j = 0; j < bucket[i].length; j++){
                answer.push(bucket[i][j]);
                count--;
                if(count < 1) break outer;
            }
        }
    }
       

    return answer;
}
