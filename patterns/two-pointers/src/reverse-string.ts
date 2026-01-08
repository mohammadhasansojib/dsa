function reverseString(s: string[]): void{
    let l = 0, r = s.length-1;

    while(l <= r){
        let temp = s[l];
        s[l] = s[r] as string;
        s[r] = temp as string;

        l++;
        r--;
    }
}