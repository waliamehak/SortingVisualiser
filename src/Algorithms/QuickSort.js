
const QuickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;

    quickSortHelper(0, array.length-1, array, animations);
    return array;
}
const quick = (low, high, array, animations) =>{
    let j=0;
    for (let i = low; i<high; i++){
        if(array[i]<array[high]){
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            j++;
        }
    }
    let temp = array[high];
    array[high] = array[j];
    array[j] = temp;
    return j;
}


const quickSortHelper = (low, high, array, animations) => {
    //find position of the array.back() and then based on that index call this function recursively again on the smaller arrays
    if(low>=high) return;
    const idx = quick(low, high, array, animations);
    quickSortHelper(low, idx-1, array, animations);
    quickSortHelper(idx+1, high, array, animations);
}

export default QuickSort;
