 // 1-masala //

// const findMax = (arr: number[]): number => {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

 // 2-masala //

// function removeDuplicates(arr: number[]): number[] {
//   let uniqueArr: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < uniqueArr.length; j++) {
//       if (arr[i] === uniqueArr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

// 3-masala

// function sortArray(arr: number[]): number[] {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[i + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// 4-masala

// function logDuplicates(arr: number[]): void {
//   let seen = [];
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < seen.length; j++) {
//       if (arr[i] === seen[j]) {
//         isDuplicate = true;
//         duplicates.push(arr[i]);
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       seen.push(arr[i]);
//     }
//   }
//   console.log(duplicates);
// }

// const numbers4 = [1, 2, 3, 2, 4, 5, 5, 3];
// logDuplicates(numbers4); // [2, 5, 3]

// 5-masala

// function filterNumbers(arr: number[], positive: boolean): number[] {
//   let result: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (positive && arr[i] > 0) {
//       result.push(arr[i]);
//     } else if (!positive && arr[i] < 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const numbers5 = [1, -2, 3, -4, 5, -6];
// const filterType = prompt(
//   "Enter 'positive' to keep positive numbers or 'negative' to keep negative numbers:"
// );
// const isPositive = filterType === "positive";
// const filteredNumbers = filterNumbers(numbers5, isPositive);

// console.log(filteredNumbers);

 // 6-masala

// function diffObjects(
//   obj1: { [key: string]: any },
//   obj2: { [key: string]: any }
// ): { [key: string]: any } {
//   let result: { [key: string]: any } = {};

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       result[key] = obj1[key];
//     }
//   }

//   for (let key in obj2) {
//     if (obj2[key] !== obj1[key] && !(key in result)) {
//       result[key] = obj2[key];
//     }
//   }

//   return result;
// }

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 4, d: 5 };
// console.log(diffObjects(obj1, obj2)); // { b: 2, c: 3, d: 5 }

  // 7-masala

// function arrayToObject(arr: any[]): { [key: number]: any } {
//   let obj: { [key: number]: any } = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }
//   return obj;
// }

// const array = ["a", "b", "c", "d"];
// console.log(arrayToObject(array)); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd' }

// 8-masala

// function flattenArray(arr: any[]): any[] {
//   let result: any[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6, 7]
