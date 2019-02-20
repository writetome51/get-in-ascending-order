import { isArray } from 'basic-data-handling/isArray_notArray';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { notInAscendingOrder } from '@writetome51/in-ascending-order';
import { getAverage } from '@writetome51/get-sum-average-product';
import { getCopy } from '@writetome51/array-get-copy';


/*****
 Returns a new array with numbers in ascending order.
 The sorting algorithm :  It finds the average value of the numbers, then moves all numbers less than
 the average into one array, and moves all numbers greater than or equal to the average into another
 array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls
 itself on them until they are both sorted.  Then they're merged into a single array.
 *****/

export function getInAscendingOrder(numbers): number[] {
	// This line returns a copy because this function is expected to return an array independent
	// of the array passed in.
	if (isArray(numbers) && numbers.length === 1) return getCopy(numbers);
	let lessThanAverage_and_atLeastAverage = getSeparatedInTwoArrays_usingAverageAsTheSeparator(numbers);

	// It's possible that some lists are now sorted, or only contain many instances of one number:
	lessThanAverage_and_atLeastAverage =
		getInAscendingOrder_ifTheyAreStillNot(lessThanAverage_and_atLeastAverage);

	return getMergedArrays(lessThanAverage_and_atLeastAverage);


	function getSeparatedInTwoArrays_usingAverageAsTheSeparator(numbers) {
		let average = getAverage(numbers);
		return getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers);
	}


	function getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers) {
		for (var i = 0, lessThan = [], greaterThanOrEqualTo = []; i < numbers.length; ++i) {

			if (numbers[i] < average) lessThan.push(numbers[i]);

			else greaterThanOrEqualTo.push(numbers[i]);
		}
		return [lessThan, greaterThanOrEqualTo];
	}


	function getInAscendingOrder_ifTheyAreStillNot(lists) {
		for (let i = 0; i < lists.length; ++i) {
			if (notInAscendingOrder(lists[i])) {
				lists[i] = getInAscendingOrder(lists[i]);
			}
		}
		return lists;
	}


}
