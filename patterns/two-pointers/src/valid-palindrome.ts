const isPalindrome = (s: string): boolean => {

    let l = 0, r = s.length-1;

    while(l < r){
        let a1 = s.charCodeAt(l), a2 = s.charCodeAt(r);

        if(a1 >= 65 && a1 <= 90) a1 += 32;
        if(a2 >= 65 && a2 <= 90) a2 += 32;

        if(!(a1 >= 48 && a1 <= 57) && !(a1 >= 97 && a1 <= 122)){
            l++;
            continue;
        }
        if(!(a2 >= 48 && a2 <= 57) && !(a2 >= 97 && a2 <= 122)){
            r--;
            continue;
        }

        if(a1 !== a2) return false;

        l++;
        r--;
    }

    return true;
}