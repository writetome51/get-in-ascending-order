import {getArrayCopy} from '@writetome51/get-array-copy';
import TimSort from 'timsort';


// Returns new copy of `array` in ascending order.
// Should not be used for alphabetical sorting (use Array.prototype.sort).

export function getInNumericOrder(array, getValue = (element) => element) {
	const sort = TimSort.sort;
	let arr = getArrayCopy(array);
	if (arr.length < 2) return arr;
	sort(arr, (a, b) => getValue(a) - getValue(b));
	return arr;
}
