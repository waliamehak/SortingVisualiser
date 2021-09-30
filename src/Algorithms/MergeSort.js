const MergeSort = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  low,
  high,
  auxArray,
  animations,
) {
  if (low === high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSortHelper(auxArray, low, mid, mainArray, animations);
  mergeSortHelper(auxArray, mid + 1, high, mainArray, animations);
  doMerge(mainArray, low, mid, high, auxArray, animations);
}

function doMerge(
  mainArray,
  low,
  mid,
  high,
  auxArray,
  animations,
) {
  let k = low;
  let i = low;
  let j = mid + 1;
  while (i <= mid && j <= high) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }
  while (j <= high) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }

}

export default MergeSort
