
const QuickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;

    quickSortHelper(0, array.length - 1, array, animations);
    return animations;
}
const quick = (low, high, array, animations) => {
    if (low >= high) return low;
    let j = low;
    for (let i = low; i < high; i++) {
        let id = i;
        if (array[i] <= array[high]) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            id = j;
            j += 1;
        }
        animations.push([high, id, i]);
        animations.push([high, array[id], array[i]]);
        animations.push([high, id, i]);
    }

    animations.push([high, j, high]);
    animations.push([high, array[high], array[j]]);
    animations.push([high, j, high]);
    let temp = array[high];
    array[high] = array[j];
    array[j] = temp;
    return j;
}


const quickSortHelper = (low, high, array, animations) => {
    //find position of the array.back() and then based on that index call this function recursively again on the smaller arrays
    if (low >= high) { return; }
    let idx = quick(low, high, array, animations);
    quickSortHelper(low, idx - 1, array, animations);
    quickSortHelper(idx + 1, high, array, animations);
}

export default QuickSort;
