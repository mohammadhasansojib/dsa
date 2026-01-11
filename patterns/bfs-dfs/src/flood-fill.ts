function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const target = image[sr][sc];
    if(target === color) return image;

    const queue: [number, number][] = [[sr,sc]];
    image[sr][sc] = color;

    const directions = [[-1,0],[0,-1],[1,0],[0,1]];

    while(queue.length){
        const [r,c] = queue.pop();
        for(let [dx,dy] of directions){
            let x = r + dx;
            let y = c + dy;

            
            if(x >= 0 && y >= 0 && x < image.length && y < image[0].length){
                if(image[x][y] === target){
                    image[x][y] = color;
                    queue.push([x,y]);
                }
            }
        }
    }

    return image;
};