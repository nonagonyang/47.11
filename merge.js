function merge(arr1, arr2) {
    let results=[]
    let pointer1=0
    let pointer2=0
    while(pointer1<arr1.length && pointer2 < arr2.length){
        if(arr1[pointer1]<arr2[pointer2]){
            results.push(arr1[pointer1])
            pointer1++
        }else{
            results.push(arr2[pointer2])
            pointer2++
        }
    }
    while (pointer1 < arr1.length) {
        results.push(arr1[pointer1]);
        pointer1++;
    }
    while (pointer2 < arr2.length) {
        results.push(arr2[pointer2]);
        pointer2++;
    }
    return results
}

function mergeSort(arr) {
//base case
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort};