console.log("hello");
//1
// let array = [1,2,3,4,5];
// let sum = 0;
// getArrayReturnSum = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// getArrayReturnSum(array);

//2
// let multi;
// getArrayReturnMulti = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         multi = arr[i] * arr[i]  
//     }
//     console.log(multi);
// }
// getArrayReturnMulti(array)

//3
// let sum1;
// let sum2;
// let sum3;
// let allSums = 0;
// getNumberSum = (num)=>{
//     for (let i = 0; i < num.length; i++) {
//             sum1 = parseInt(num / 100)
//             sum2 = parseInt(num / 10) % 10
//             sum3 = num % 10
//             allSums = sum1+sum2+sum3;
//     }
//     console.log(sum1);  
//     console.log(sum2);  
//     console.log(sum3);  
//     console.log(allSums);  
// }
// getNumberSum("123")

//4
//a
// let min;
// getMinNumber = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         min = arr[0];
//       for (let j = 0; j < arr.length; j++) {
//         if(min > arr[j]){
//             min = arr[j]
//         }
          
//       }
//     }
//     console.log(min);      
// }
// getMinNumber(array)

//b
// let max;
// getMaxNumber = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         max = arr[0];
//       for (let j = 0; j < arr.length; j++) {
//         if(max < arr[j]){
//             max = arr[j]
//         }
          
//       }
//     }
//     console.log(max);      
// }
// getMaxNumber(array)

//c
// let sum = 0;
// let avg;
// getNumbersAvg = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         avg = sum / arr.length;
//     }
//     console.log(sum);
//     console.log(avg);
// }
// getNumbersAvg(array)

//5
//a
// let first = prompt("Please enter first number");
// let second = prompt("Please enter second number");
// let therd = prompt("Please enter therd number");

// getThreeNumbers = (num1,num2,num3)=>{
//     let arr = [];
//     arr.push(Number(num1));
//     arr.push(Number(num2));
//     arr.push(Number(num3));
//     let multi = arr[0];  
//     console.log(arr);
//     for (let i = 1; i < arr.length; i++) {
//         multi *= arr[i]
//     }
//     console.log(multi);
// }

// getThreeNumbers(first,second,therd)

//b
// let first = prompt("Please enter first number");
// let second = prompt("Please enter second number");
// let therd = prompt("Please enter therd number");

// getThreeNumbers = (num1,num2,num3)=>{
//     let arr = [];
//     arr.push(Number(num1));
//     arr.push(Number(num2));
//     arr.push(Number(num3));
//     let sum = 0;  
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// getThreeNumbers(first,second,therd)

//c
// let first = prompt("Please enter first number");
// let second = prompt("Please enter second number");
// let therd = prompt("Please enter therd number");

// getThreeNumbers = (num1,num2,num3)=>{
//     let arr = [];
//     arr.push(Number(num1));
//     arr.push(Number(num2));
//     arr.push(Number(num3));
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0){
//             console.log("even");
//         }
//         else{
//             console.log("not even");
//         }
//     }
// }

// getThreeNumbers(first,second,therd)


// ezra solution 

// function input() {
//     let i =0,arr=[];
//     while (i<3) {
//         let input = prompt("insert number");
//         if (Number(input)) {
//             arr[i]= Number(input)
//             Number(input) % 2?alert("lo zoogy"):alert("zoogy")//זוגי לא זוגי
//             i++
//         }
//     }
//     // return console.log(multi(arr))
//     // return console.log(plus(arr))
// }
// input()

