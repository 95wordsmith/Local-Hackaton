// function checkValue(value) {
//   let x = 0;
//   let array = [0, 1];

//   let firstindex = 0;
//   let secondindex = 1;

//   while (x < value) {
//     let first = array[firstindex];
//     let second = array[secondindex];

//     array.push(first + second);
//     x++;
//     firstindex++;
//     secondindex++;
//   }
//   return array[value];
// }

// // console.log(checkValue(11))

// function anagram (s,t){
//   let ana = s.split('').reverse().join('')
//   return ana ===t
// }

// console.log(anagram('rar','rarr'))

// function check(first,second){
//     return first === second
// }
// const commonElements = (array,array1)=>{

//   let unique = []
//   for(let i = 0; i<array.length;i++){
//     // console.log('first')
//     for(let j = 0; j<array1.length;j++){
//       console.log(array[i],array1[j])
//         let bool = check(array[i],array1[j])
//       // console.log('second')

//         if(bool){
//           unique.push(array[i])
//         }
//     }

//   }

//   return unique

// }

// console.log(commonElements([1,5,7,4,8,9,33,44,5,77],[5,33,4,6,8,2,3,9,4,8]))

// const twoSum=(arr,sum)=>{
//   const ind = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i]+arr[j]==sum){
//           ind.push(i)
//           ind.push(j)
//         }
//     }
//   }

// return ind.slice(0,2)

// }

// console.log(twoSum([11,2,15,7,3],10))

// const twoSum=(arr,sum)=>{

// }

// console.log(twoSum([11,2,15,7,3],10))

// const array =[23,5,6,8,5]

// const object ={}
// for (const x in array){
//   object[x]=array[x]
// }

// function twoSum(arr,target){

// var obj ={}
// for (let i =0; i<arr.length;i++){
//   var n = arr[i]

//   if(obj[target-n]>0){
//     return [ obj[target-n],i]
//   }else{

//     obj[n]=i
//   }
// }

// }

// console.log(twoSum([11,2,15,7,3],10))

// function profit (arr){
//   const maxvalue = Math.max(...arr)
//   const minvalue = Math.min(...arr)

// }

// function sortNum (num){

//   // let maxvalue=Math.max(...num)
//   // let index = num.indexOf(maxvalue)
//   // let rotations = 0
//   // for(let i = 0; i <=index; i++ ){
//   //   rotations ++
//   // }
//   // return rotations

// let first = 0
// let second = 1

// let firstValue = 2
// let secondValue =3
// let rotations = 0

// while(secondValue > firstValue){
//   firstValue= num[first]
//   secondValue = num[second]
//   first ++
//   second ++
//   rotations++
// }
// return  [firstValue,secondValue,'rotations',rotations]
// }

// function binarySort(arr){

//   let first = 0
//   let last = arr.length -1

//   let num = 0

//   while(){
//   let midpoint = Math.floor(arr.length /2)
//   if(arr[midpoint]<arr[last]){
//     last =midpoint-1

//   } else if (arr[midpoint]>arr[last]){
//     first =midpoint+1
//   }

//   }

// }

// console.log(sortNum([19,25,29,3,5,6,7,9,11,14]))
// // sortNum([19,25,29,3,5,6,7,9,11,14])

// [5,6,7,8,9,10,11,1,2,3,4]

function byStock(arr) {
  const profit = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let value = arr[j] - arr[i];
      if (value > 0) {
        profit.push(arr[j] - arr[i]);
      }
    }
  }

  if (profit.length === 0) {
    return 0;
  }

  return Math.max(...profit);
}

console.log(byStock([7, 1, 5, 3, 6, 4]));


// function checkInput (str){
// let first =0
// let second = 2

//   const newarr  =[]

//   while (second <str.length+2){
    
//     let sliced = str.slice(first,second)
//     newarr.push (sliced.split(''))
//     first = second
//     second =second +2
//   }
// const check = []
//   for (const [key ,value]of newarr){
//     if(key==='['&& value ===']' || key==='('&& value ===')'||key==='{'&& value ==='}'){
//       check.push(true)
//     }else{
//       check.push(false)
//     }   
//   }

//   return check.every(ctx=>ctx===true)
    
//   }



function checkInput (str){

const stack = []

  for(let i =0; i<str.length; i++){
   const char = str[i]
   if(char ==='(' ||char ==='['||char ==='{'){
    stack.push(char)
   } else if (char ===')' ||char ===']'||char ==='}') {
    if(isEmpty(stack)){
      return false
    }
    const top = stack.pop()
    if(char ===')'&& top !== '(' || 
    char ===']'&& top !== '['||
    char ==='}'&& top !== '{'
    ){
      return false
    }
    
   }
  }
  return isEmpty(stack)
}
function isEmpty(stack){
  return stack.length ===0
}
  
  
  
  


console.log(checkInput('([]{})'))



// const nana = 'sdfgssfgsf'
// const baba = nana.slice(0,2)
// console.log(baba)