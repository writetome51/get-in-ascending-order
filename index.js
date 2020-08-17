import {getArrayCopy} from '@writetome51/get-array-copy';
import {quickSort} from './__privy.js';


// Returns new array of `numbers` in ascending order.

export function getInNumericOrder(numbers) {
	let nums = getArrayCopy(numbers);
	if (nums.length < 2) return nums;
	quickSort(nums);
	return nums;
}
