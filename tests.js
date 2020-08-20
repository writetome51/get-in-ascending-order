import {getShuffled} from '@writetome51/array-get-shuffled';
import {getInNumericOrder} from './index.js';
import {getAdjacentAt} from '@writetome51/array-get-adjacent-at';
import TimSort from 'timsort';

// test 6: speed test.
let numbers = [];
let i = 20000000; // 20M
let max = i - 1;
while (--i >= 0) numbers.push(i);
numbers = getShuffled(numbers);
let length = numbers.length;
console.log('beginning speed check:')


console.time('speed check');
let result = getInNumericOrder(numbers);
console.timeEnd('speed check'); // avg 5.17 seconds (to sort 20 million numbers).
if (result.length === length && result[0] === 0 && result[result.length - 1] === max)
	console.log('test 6 passed');
else console.log('test 6 FAILED');


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
getInNumericOrder(chars);
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

