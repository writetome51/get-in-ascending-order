import {getArrayCopy} from '@writetome51/get-array-copy';
import TimSort from 'timsort';


// Returns new array of `numbers` in ascending order.

export function getInNumericOrder(numbers) {
	const sort = TimSort.sort;
	let nums = getArrayCopy(numbers);
	if (nums.length < 2) return nums;
	sort(nums, (a, b) => a - b);
	return nums;
}
