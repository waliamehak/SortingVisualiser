const BubbleSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
  }

  const bubbleSortHelper = (array, animations)=> {
    for (let i = 0; i<array.length-1; i++){
        for (let j=1; j<array.length-i; j++){
            animations.push([j-1, j]);
            if(array[j-1]>array[j]){
                let temp = array[j-1];
                array[j-1]= array[j];
                array[j] = temp;
            }
            animations.push([array[j-1], array[j]]);
            animations.push([j-1 ,j]);
        }
    }
  }

export default BubbleSort;
