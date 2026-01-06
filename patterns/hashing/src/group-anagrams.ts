function groupAnagrams(strs: string[]): string[][] {
    const buckets = new Map<string, string[]>();

    for(const word of strs){
        let freq = new Array(26).fill(0);

        for(const letter of word){
            let index = letter.charCodeAt(0) - 97;

            freq[index]++;
        }

        let key = freq.join("#");

        if(!buckets.has(key)) buckets.set(key, []);

        buckets.get(key)?.push(word);
    }

    return Array.from(buckets.values());
};
