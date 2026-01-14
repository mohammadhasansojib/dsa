function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const freq = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        let a1 = s.charCodeAt(i) - 97;
        let a2 = t.charCodeAt(i) - 97;

        freq[a1]++;
        freq[a2]--;
    }

    for(const f of freq){
        if(f !== 0) return false;
    }

    return true;
};
