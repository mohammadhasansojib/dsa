class MinStack {
    stack: {
        val: number,
        currentMin: number
    }[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let currentMin: number;
        
        if(this.stack.length){
            currentMin = Math.min(this.stack[this.stack.length-1].currentMin, val);
        }else{
            currentMin = val;
        }

        this.stack.push({val, currentMin});
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length-1].val;
    }

    getMin(): number {
        return this.stack[this.stack.length-1].currentMin;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// leetcode - 155