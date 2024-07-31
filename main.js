// -------------------1-topshiriq-----------------
// let person= {
//     name: "Abdulloh",
//     age: 19,
//     job: "logoistic Companiy",
//     intereset: "Game",
//     hobby: "Slip",
//     number: "947500000",
//     userName: "AU"
// }
// let arr = Object.keys(person);
// let arr1 = Object.values(person);
// console.log(arr, arr1);

// 2-masala
// const person1={
//     name:"Abdulloh",
//     age:19
// }
// const person2={
//     hobby:"valeyboll",
//     intereset:"sleep"
// }
// const lastObj=Object.assign(person1,person2)
// console.log(lastObj);

// 3-masala
// let array=[1,2,3,4,5,6,7,8]
// function findFunc(arr){
//     if(arr.length===0){
//         return [];
//     }
//     let lastElement=arr[arr.length-1];
//     let resElement=lastElement+1;
//     return [...arr.slice(0, arr.length - 1), resElement];
// }
// let newArr=findFunc(array);
// console.log(newArr);

// 5-masala
// let arr = [1, 2, 3, 4,5,6,7,8];
// function swapFirstAndLast(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let firstElement = arr[0];
//     let lastElement = arr[arr.length - 1];

//     arr[0] = lastElement;
//     arr[arr.length - 1] = firstElement;

//     return arr;
// }
// let newArr = swapFirstAndLast(arr);
// console.log(newArr);

// 6-masala
// function promptWords(times, arr = []) {
//     if (times === 0) {
//         return arr;
//     }
//     let word = prompt("Iltimos, so'z kiriting:");
//     arr.push(word);

//     return promptWords(times - 1, arr);
// }
// let wordsArray = promptWords(6);
// console.log(wordsArray);

// ----------------------2-topshiriq-----------------
// function addPrompFunc() {
//     let word = prompt("Iltimos, so'z kiriting:");
//     let arr = [];
//     arr.push(word);
//     return arr;
// }
// let resultArray = addPrompFunc();
// console.log(resultArray);

// 2-masala
// let arr1=[1,2,3,4,5]
// let arr2=[10,5,4,6,7,8]

// function myFunction(a,b){
//     let array=[]
//     for(let num of a){

//         for(let num1 of b){
//             if(num==num1){
//                 array.push(num)
//             }
//         }
//     }
//     console.log(array);
// }
// myFunction(arr1, arr2)

// 3-masala
// let obj={
//     name:"Johon",
//     age:30,
//     job:"mehanic",
//     study:"none",
//     travel:"US"
// }
// let arr=Object.keys(obj)
// console.log(arr.length);

// 4-masala
// let number = prompt("son kriting");
// function myFunction(size) {
//     let arrRes = 0;
//     for (let i = 0; i < size; i++) {
//         arrRes += i;
//     }
//     console.log(arrRes);
// }
// myFunction(number);

// 5-masala
// let obj1={
//     name:"Abdulloh"
// }
// let obj2={
//     age:19
// }
// const lastObj=Object.assign(obj1,obj2)
// let array=Object.values(lastObj)
// console.log(array);
