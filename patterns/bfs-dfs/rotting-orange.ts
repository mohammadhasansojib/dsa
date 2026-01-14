function orangesRotting(grid: number[][]): number {
    let minute = 0;
    const directions = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ];
    const queue: [number, number, number][] = [];

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 2) queue.push([i,j,0]);
        }
    }

    for(const indices of queue){
        const [r,c,t] = indices;

        for(const direction of directions){
            const x = r + direction[0];
            const y = c + direction[1];
            const t2 = t+1;

            if(x >= 0 && x < grid.length && y >= 0 && y < grid[0].length){
                if(grid[x][y] === 1){
                    grid[x][y] = 2;
                    queue.push([x,y,t2]);
                    minute = Math.max(minute, t2);
                }
            }
        }


    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1) return -1;
        }
    }

    return minute;
};
