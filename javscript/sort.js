// bubble sort
// [6,20,8,2,4]  compare 6,8 ,20, 8 and arrange by two by two

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
// bubbleSort(arr)
// console.log(arr)
const arr = [8, 20, -2, 4, -6];

function bubbleSort2(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      // console.log("n", n - i - 1);
      // console.log("i", i);
      // console.log("j", j, j + 1);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // console.log(arr);
      }
    }
  }
  return arr;
}

// console.log(bubbleSort2(arr));
// console.log('ssd')


function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      // console.log('i',i)
      // console.log('j',j)
      // console.log('minIndex',minIndex)
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    // console.log('arr',arr)
  }
  return arr;
}


// console.log('selection',selectionSort(arr))
function insertionSort (arr){
  const n = arr.length
  for(let i=1; i<n; i++){
    const key = arr[i]
    let j = i-1
    while( j>=0 && arr[j]>key){
      // console.log('i',i)
      // console.log('j',j)
      // arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=key
    // console.log('key',key)
    // console.log('arr',arr)
  }
return arr
}


insertionSort([29,10,14,37,14,33,8,11])


function mergeSort (arr){
  // base case

  if(arr.length <=1) return arr
  let mid = Math.floor(arr.length/2)
  
  let left = mergeSort(arr.slice(0,mid))
  // console.log('leftOuter',left)
  let right =mergeSort(arr.slice(mid))
  // console.log('rightOuter',right)

  return merge(left,right)
}

function merge (left,right){
  let sortedArr = []
  while(left.length && right.length){
    if(left[0]<right[0]){
      sortedArr.push(left.shift())
    }else{
      sortedArr.push(right.shift())
    }
  }
  // console.log('sortedArr',sortedArr);
  // console.log('right', right)
  // console.log('left', left)

  return [...sortedArr, ...left,...right]
}

// console.log(mergeSort([29,10,14,37,14,33,8,11]))


const intervals = [[1,3],[2,6],[8,10],[15,18]]

function merged (arr){
  const start = 0
  const endIndex =1

  arr.sort((a,b)=>a[start]-b[start])
  console.log('arr',arr)
  const mergedIntervals = []
  let mergeStart = arr[0][start]
  let mergeEnd = arr[0][endIndex]

  for (let i =1; i<arr.length; i++){
    const subsequentInterval = arr[i]

    if(subsequentInterval[start]<=mergeEnd){
      mergeEnd = Math.max(mergeEnd,subsequentInterval[endIndex])
    }else{
      mergedIntervals.push([mergeStart,mergeEnd])
      mergeStart = subsequentInterval[start]
      mergeEnd = subsequentInterval[endIndex]

    }
  }
mergedIntervals.push([mergeStart,mergeEnd])
return mergedIntervals
}

// console.log('merged',merged(intervals))


function quickSort(arr){
  if (arr.length<=1) return arr
  const pivot= arr[0]
  const left = []
  const right =[]


  for (let i = 1; i<arr.length; i++){
    if(pivot>arr[i]){
        left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  // console.log('left',quickSort(left))
  // console.log('pivot',pivot)
  // console.log('right',quickSort(right))
  return [...quickSort(left),pivot,...quickSort(right)]

}

console.log(quickSort([5,2,9,3,6,1,8,7]))




