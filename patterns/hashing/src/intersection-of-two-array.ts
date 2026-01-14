const intersection = (nums1: number[], nums2: number[]): number[] => {
    const result = new Set<number>();

    const existedElement = new Set<number>();

    for(const num of nums1){
        if(!existedElement.has(num)) existedElement.add(num);
    }

    for(const num of nums2){
        if(existedElement.has(num)) result.add(num);
    }

    return Array.from(result.values());
}