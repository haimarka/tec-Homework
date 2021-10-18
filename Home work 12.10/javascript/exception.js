
//1 exception

// let e = true;

// console.log(1);
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);

// if true 1245
// if false 1235

// 2 exception

// let e = false;
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// finally{
//     console.log("clean up")
// }
// console.log(5);

// if e == true prine 124 clean up 5
// if e == false printe 123 clean up 5

// 3 exception

let one = process.argv[2];
let two = process.argv[3];
function safeDiv(num1,num2){
try {
    if(num2 == 0){
        throw "Denominator is zero"
    }
    console.log(num1 / num2);
} catch (error) {
    console.log("error");
}
finally{
    console.log("Division result")

}
};

safeDiv(one,two)




