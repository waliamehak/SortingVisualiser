
const InsertionSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
}

const insertionSortHelper = (array, animations) => {
    for (let i = 1; i < array.length ; i++) {
        let j = i-1;  
        while(j>=0 && array[j+1]<array[j]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1]= temp;
           animations.push([j, j+1]);
           animations.push([array[j], array[j+1]]);
           animations.push([j, j+1]); 
           j--;
        }
    }
}

export default InsertionSort;
