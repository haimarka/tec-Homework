//1
// function returnNumSum(num, sum) {
//   if (num.length < 3) {
//     return returnNumSum(num, sum);
//   }
//   return (
//     (sum += parseInt(num / 100)),
//     (sum += parseInt(num / 10) % 10),
//     (sum += num % 10)
//   );
// }
// console.log(returnNumSum(123, 0));

// uri's solution
// function sumDigits(num){
//     if(!num) return 0;
//     return (num % 10 + sumDigits(parseInt(num / 10)));
// }
// console.log(sumDigits(123));

// barano's solution
// function calcSum(num ,sum){
//     if(!num) return sum;
//     sum += num % 10;
//     num = Math.floor(num / 10);
//     return calcSum(num,sum)
// }

// console.log(calcSum(123,0));

//2
// let array = [7,1, 2, 3, 4, 5];
// function returnMinNumber(arr, min) {
//     arr.shift()
//     if(min > arr[0]){
//         min = arr[0]
//         returnMinNumber(arr,min)
//     }
//     return min
// }

// console.log(returnMinNumber(array,array[0]));

//3

// function getUserNumbers(arr,num){
//     if(arr.length < 3){
//         num = Number(prompt('enter number'))
//         arr.push(num)
//         return getUserNumbers(arr,num)
//     }
//     return arr
// }

// console.log(getUserNumbers([],0))

//4
function merge(left, right) {
    let sortedArr = []; 
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    return [...sortedArr, ...left, ...right];
  }
  function mergeSort(arr) {
    const half = arr.length / 2;
  
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    console.log(left);
    console.log(right);
    return merge(mergeSort(left), mergeSort(right));
  }
  let array = [7,6,1,4,9,2,8,3,10,5];
  console.log(mergeSort(array));