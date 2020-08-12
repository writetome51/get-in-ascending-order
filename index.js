import {getMergedArrays} from '@writetome51/array-get-merged-arrays';
import {getAverage} from '@writetome51/get-sum-average-product';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {inNumericOrder} from '@writetome51/in-numeric-order';
import {isArray} from '@writetome51/is-array-not-array';
import {not} from '@writetome51/not';


/*****
 Returns a new array with numbers in ascending order.
 The sorting algorithm :  It finds the average value of the numbers, then moves all numbers less than
 the average into one array, and moves all numbers greater than or equal to the average into another
 array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls
 itself on them until they are both sorted.  Then they're merged into a single array.
 *****/

export function getInNumericOrder(numbers) {
	// This line returns a copy because this function is expected to return a new array.
	if (isArray(numbers) && numbers.length === 1) return getArrayCopy(numbers);

	let [lessThanAverage, atLeastAverage] = getLessThanAverage_and_atLeastAverage(numbers);

	// It's possible that some lists are now sorted, or only contain many instances of one number:
	[lessThanAverage, atLeastAverage] =
		getInNumericOrder_ifTheyAreStillNot([lessThanAverage, atLeastAverage]);

	return getMergedArrays([lessThanAverage, atLeastAverage]);


	function getLessThanAverage_and_atLeastAverage(numbers) {
		let average = getAverage(numbers);

		for (var i = 0, lessThan = [], atLeast = []; i < numbers.length; ++i) {
			if (numbers[i] < average) lessThan.push(numbers[i]);
			else atLeast.push(numbers[i]);
		}
		return [lessThan, atLeast];
	}


	function getInNumericOrder_ifTheyAreStillNot(lists) {
		let length = lists.length;
		for (let i = 0; i < length; ++i) {
			if (lists[i].length > 0 && not(inNumericOrder(lists[i]))) {
				lists[i] = getInNumericOrder(lists[i]);
			}
		}
		return lists;
	}
}
