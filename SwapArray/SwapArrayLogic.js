function swapTwoElementsInArray(array, first, second) {
    if (0 <= first && first < array.length && 0 <= second && second < array.length) {
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }
    return array;
}

console.log(swapTwoElementsInArray([65, 12, 3], 0, 2));

console.log(swapTwoElementsInArray([3, 4, 65, 12, -1], -100, 4));