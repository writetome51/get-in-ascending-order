import { getShuffled } from '@writetome51/array-get-shuffled';
import { getInNumericOrder } from './index';




let numbers = [];

let i = 0;

while (++i <= 100) {
	numbers.push(i);
}
let shuffledNumbers = getShuffled(numbers);


// Test 1: make sure it triggers errors when passing incorrect values:
let errorsTriggered = 0;
try {
	let ordered = getInNumericOrder();
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder('0');
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder('');
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder([]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder({});
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder(false);
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInNumericOrder(['', 1]);
}
catch (e) {
	++errorsTriggered;
}

if (errorsTriggered === 7) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: If array with only 1 number is passed, it should return it without error:
let errorTriggered = false;
try{
	var result = getInNumericOrder([4]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 failed');
else if (result.length === 1 && result[0] === 4) console.log('test 2 passed');


// Test 3: make sure it sorts the shuffled numbers correctly:
result = getInNumericOrder(shuffledNumbers);
if (result.length === 100 && result[0] === 1 && result[result.length - 1] === 100){
	console.log('test 3 passed');
}
else console.log('test 3 failed');
