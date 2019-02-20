import { getShuffled } from '@writetome51/array-get-shuffled';
import { getInAscendingOrder } from './index';




let numbers = [];

let i = 0;

while (++i <= 100) {
	numbers.push(i);
}
let shuffledNumbers = getShuffled(numbers);


// Test 1: make sure it triggers errors when passing incorrect values:
let errorsTriggered = 0;
try {
	let ordered = getInAscendingOrder();
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder('0');
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder('');
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder([]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder({});
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder(false);
}
catch (e) {
	++errorsTriggered;
}
try {
	let ordered = getInAscendingOrder(['', 1]);
}
catch (e) {
	++errorsTriggered;
}

if (errorsTriggered === 7) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: If array with only 1 number is passed, it should return it without error:
let errorTriggered = false;
try{
	var result = getInAscendingOrder([4]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 failed');
else if (result.length === 1 && result[0] === 4) console.log('test 2 passed');


// Test 3: make sure it sorts the shuffled numbers correctly:
result = getInAscendingOrder(shuffledNumbers);
if (result.length === 100 && result[0] === 1 && result[result.length - 1] === 100){
	console.log('test 3 passed');
}
else console.log('test 3 failed');


numbers = [10.2, 6.15, 44.02, 2.25, 21.1, 66.3, 32.2, 22.2, 33.2, 44.025, 11.1];
let orderedNumbers = getInAscendingOrder(numbers);
console.log(orderedNumbers);