function lengthOfLongestSubstring(s: string): number {

    const window = new Set<string>();
    let maxLen = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++){

        while(window.has(s[right] as string)){
            window.delete(s[left] as string);
            left++;
        }

        let len = (right+1) - left;

        window.add(s[right] as string);
        maxLen = Math.max(maxLen, len);
    }

    return maxLen;
};