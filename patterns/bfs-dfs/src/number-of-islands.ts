function numIslands(grid: string[][]): number {
    let count = 0;
    let stack: [number, number][] = new Array();
    const directions = [
                        [-1,0],
                        [0,-1],
                        [1,0],
                        [0,1]
                    ];


    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){

            if(grid[i][j] === '1'){
                
                count++;
                grid[i][j] = '0';
                stack.push([i,j]);

                dfs:
                while(stack.length > 0){
                    const [r,c] = stack[stack.length-1];

                    for(const direction of directions){
                        let x = r + direction[0];
                        let y = c + direction[1];

                        if(x >= 0 && x < grid.length && y >= 0 && y < grid[0].length){
                            if(grid[x][y] === '1'){
                                grid[x][y] = '0';
                                stack.push([x,y]);
                                continue dfs;
                            }

                        }
                    }

                    stack.pop();
                }

            }

        }
    }

    return count;
};
