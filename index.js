import {getArrayCopy} from '@writetome51/get-array-copy';


// Returns new array of `numbers` in ascending order.

export function getInNumericOrder(numbers) {
	let nums = getArrayCopy(numbers);
	if (nums.length === 1) return nums;
	quickSort(nums);
	return nums;


	function quickSort(arr) {
		__quickSort(arr, 0, arr.length - 1);


		function __quickSort(arr, leftPos, rightPos) {
			let initialLeftPos = leftPos, initialRightPos = rightPos, pivot = rightPos,
				direction = true;

			while ((leftPos - rightPos) < 0) {
				if (direction) {
					if (arr[pivot] < arr[leftPos]) {
						tradePlaces(pivot, leftPos);
						pivot = leftPos;
						--rightPos;
						direction = !(direction);
					}
					else ++leftPos;
				}
				else {
					if (arr[pivot] <= arr[rightPos]) --rightPos;
					else {
						tradePlaces(pivot, rightPos);
						++leftPos;
						pivot = rightPos;
						direction = !(direction);
					}
				}
			}
			if (pivot - 1 > initialLeftPos) __quickSort(arr, initialLeftPos, pivot - 1);
			if (pivot + 1 < initialRightPos) __quickSort(arr, pivot + 1, initialRightPos);


			function tradePlaces(el1, el2) {
				let element1 = arr[el1];
				arr[el1] = arr[el2];
				arr[el2] = element1;
			}
		}

	}
}
