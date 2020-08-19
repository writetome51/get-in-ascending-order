import {getArrayCopy} from '@writetome51/get-array-copy';
import TimSort from 'timsort';
const sort = TimSort.sort;


// Returns new array of `numbers` in ascending order.

export function getInNumericOrder(numbers) {
	let nums = getArrayCopy(numbers);
	if (nums.length < 2) return nums;
	sort(nums, (a, b) => a - b);
	return nums;
}
