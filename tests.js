import {getShuffled} from '@writetome51/array-get-shuffled';
import {getInNumericOrder} from './index.js';


// Test 1: make sure it triggers errors when passing incorrect values:
let errorsTriggered = 0;
try {
	let ordered = getInNumericOrder();
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder('0');
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder('');
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder([]);
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder({});
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder(false);
} catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder(['', 1]);
} catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 7)
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


// Test 2: If array with only 1 number is passed, it should return it without error:
let errorTriggered = false;
try {
	var result = getInNumericOrder([4]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 FAILED');
else if (result.length === 1 && result[0] === 4) console.log('test 2 passed');


let numbers = [];
let i = 0;
while (++i <= 100) numbers.push(i);
let shuffledNumbers = getShuffled(numbers);

// Test 3: make sure it sorts the shuffled numbers correctly:
let firstNum = shuffledNumbers[0]; // save for later.
result = getInNumericOrder(shuffledNumbers);
if (result.length === 100 && result[0] === 1 && result[result.length - 1] === 100) {
	console.log('test 3 passed');
} else console.log('test 3 FAILED');


// test 4: make sure shuffled array is still the same
if (firstNum === shuffledNumbers[0]) console.log('test 4 passed');
else console.log('test 4 FAILED');


// test 5: make sure it handles without error a list of the same number repeated many times.
numbers = [];
i = 0;
while (++i <= 20) numbers.push(1); // numbers is 1 repeated 20 times.
result = getInNumericOrder(numbers);
if (result.length === 20 && result[0] === 1 && result [19] === 1) console.log('test 5 passed');
else console.log('test 5 FAILED');


// test 6: speed test.  It should take less than 600 milliseconds:
numbers = [];
i = 1000001;
while (--i >= 1) numbers.push(i);
console.time('speed check');
result = getInNumericOrder(numbers);
console.timeEnd('speed check');
if (result.length === 1000000 && result[0] === 1 && result[result.length - 1] === 1000000)
	console.log('Numbers sorted correctly in final test.\n' +
		'If result of speed check is less than 600ms, test 6 passed');
else console.log('Numbers sorted incorrectly in final test');
