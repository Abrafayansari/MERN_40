// CUSTOM MAP
// const array = [1,2,3,4,5,6]
// function custommap(array,bionod){
//     const newaraay=[]
//     for (let i = 0; i < array.length; i++) {
//         newaraay.push(bionod(array[i]))
//     }
//     return newaraay
// }
// const double=(item)=> item*4
// const result=custommap(array,double)
// console.log(result);







// CUSTOM FILTER
// const array = [1, 2, 3, 4, 5, 6];
// function customfilter(array, callback) {
//   const newarray = [];
//   for (let i = 0; i < array.length; i++) {
//     const res = callback(array[i]);
//     if (res) {
//       newarray.push(array[i]);
//     }
//   }
//   return newarray;
// }
// const filter = (item) => {
//   return item % 2 == 0;
// };
// const result = customfilter(array, filter);
// console.log(result);








//CUSTOM EVERY
// const array = [1, 2, 3, 4, 5, 6];
// function customfilter(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const res = callback(array[i] > 0);
//     if (res) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// const every = (item) => {
//   return item;
// };
// const result = customfilter(array, every);
// console.log(result);







// CUSTOM SOME
// const array = [1, 2, 3, 4, 5, 6];
// function customsome(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const res = callback(array[i] > 0);
//     const res2 = callback(array[i] >9 );
//     if (res || res2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// const every = (item) => {
//   return item;
// };
// const result = customsome(array, every);
// console.log(result);












// CUSTOM REDUCE
// const numbers = [1,2,3]

//     const sumReducer = (initialValue, current) => initialValue + current;

//     const reduce = (reducer, initialValue, array) => {
//       let value = initialValue;

//       for(let i = 0; i < array.length; i++) {
//         let currentValue = array[i]
//         value = reducer(value, currentValue)
//       }

//       return value;
//     }

//     const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)

//     console.log("Custom reduce function, " + sumOfNumbersCustom);