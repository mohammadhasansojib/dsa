function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue = [[sr,sc]];
    const directions = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ];
    const targetValue = image[sr][sc];
    image[sr][sc] = color;

    if(targetValue === color) return image;

    for(const indices of queue){
        const [r,c] = indices;

        for(const direction of directions){
            const x = r + direction[0];
            const y = c + direction[1];

            if(x >= 0 && x < image.length && y >= 0 && y < image[0].length){
                if(image[x][y] === targetValue){
                    image[x][y] = color;
                    queue.push([x,y]);
                }
            }
        }
    }

    return image;
};
