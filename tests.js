import {getShuffled} from '@writetome51/array-get-shuffled';
import {orderNumerically} from './index.js';
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {arraysMatch} from '@writetome51/arrays-match';

let arrays = [ [1,2,3], [1], [], [4,5], [0], [6,7], [4,5,6] ];
orderNumerically(arrays, (arr) => arr.length)
console.log(arrays);

// test 0
console.time('testing repeated items');
let numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
orderNumerically(numbers);
console.timeEnd('testing repeated items');
if (arraysMatch(numbers, numbers)) console.log('test 0 passed');
else console.log('test 0 FAILED');

// test 0A
numbers = [];
console.time('testing empty array');
orderNumerically(numbers);
console.timeEnd('testing empty array');
if (numbers.length === 0) console.log('test 0A passed');
else console.log('test 0A FAILED');

// test 1
console.time('testing object sorting');
let objects = [{age: 12}, {age: 7}, {age: 18}, {age: 5}, {age: 2}];
orderNumerically(objects, (obj) => obj.age);
let result = getArrayFromProperty('age', objects);
console.timeEnd('testing object sorting');
if (arraysMatch(result, [2, 5, 7, 12, 18])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// test 6: speed test.
numbers = [];
let i = -1;
let max = 20000000; // 20M
while (++i < max) numbers.push(i);
numbers = getShuffled(numbers);
let length = numbers.length;
console.time('testing sorting 20 million numbers');
orderNumerically(numbers);
console.timeEnd('testing sorting 20 million numbers'); // avg 5.5 seconds.
if (numbers.length === length && numbers[0] === 0 && numbers[numbers.length - 1] === (max - 1))
	console.log('test 2 passed');
else console.log('test 2 FAILED');



/************************************

 // Can it also work for sorting in alphabetical order?

let chars = [
	'z',
	'c',
	'k',
	'v',
	'm',
	'a',
	'o',
	'r',
	'n',
	'x',
	'zzz',
	'e',
	'q',
	'w',
	'e',
	'z',
	'c',
	'k',
	'v',
	'm'
];
i = -1;
while (++i < 12) chars = chars.concat(chars);
console.time('quickSort');
orderNumerically(chars);
console.timeEnd('quickSort');
// avg 0.108ms  (small array of 17 chars)
// avg 0.177ms  (small array of 119 chars)
// avg 222.62ms  (large array of 23,552 chars)


console.time('Array.sort');
chars.sort((a, b) => a < b ? -1 : 1);
console.timeEnd('Array.sort');
// avg. 0.017ms (small array of 17 chars)
// Conclusion:  Array.sort() is faster than quickSort() for small array (17 chars).
// avg 0.035ms (small array of 119 chars)
// Conclusion:  Array.sort() is faster than quickSort() for small array (119 chars).
// avg 1.78ms (large array of 23,552 chars)
// Conclusion:  Array.sort((a, b) => a < b ? -1 : 1) is faster for alphabetical sorting, no matter the array size.

 **************************/
