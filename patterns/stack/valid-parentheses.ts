function isValid(s: string): boolean {
    const stack: string[] = [s[0]];

    for(let i = 1; i < s.length; i++){
        let c1 = stack[stack.length-1];
        let c2 = s[i];
        let bracket = c1 + c2;

        let isCorrect = bracket == "()" || bracket == "{}" || bracket == "[]";

        if(isCorrect){
            stack.pop();
        }else{
            stack.push(c2);
        }
    }

    return stack.length ? false : true;
};


// leetcode - 20