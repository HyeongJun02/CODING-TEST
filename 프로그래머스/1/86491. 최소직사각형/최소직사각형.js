function solution(sizes) {
    let width = Array(2), height = Array(2), size = Array(2);
    let lastWidth = sizes[0][0], lastHeight = sizes[0][1], minSize = lastWidth * lastHeight;
    
    for (let i = 1; i < sizes.length; i++) {
        width[0] = (sizes[i][0] > lastWidth) ? sizes[i][0] : lastWidth;
        height[0] = (sizes[i][1] > lastHeight) ? sizes[i][1] : lastHeight;
        size[0] = width[0] * height[0];
        
        width[1] = (sizes[i][1] > lastWidth) ? sizes[i][1] : lastWidth;
        height[1] = (sizes[i][0] > lastHeight) ? sizes[i][0] : lastHeight;
        size[1] = width[1] * height[1];
        
        // console.log(lastWidth, lastHeight, minSize);
        // console.log(size[0], size[1]);
        
        [lastWidth, lastHeight, minSize] = (size[0] < size[1]) ? [width[0], height[0], size[0]] : [width[1], height[1], size[1]];
    }
        
    // console.log(lastWidth, lastHeight, minSize);
    // console.log(size[0], size[1]);
    
    return minSize;
}