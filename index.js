import TimSort from 'timsort';


// Re-orders `array` in ascending numeric order.
// Should not be used for alphabetical sorting (use Array.prototype.sort).

export function orderNumerically(
	array,
	getValueToSortBy = (element) => element
) {
	if (array.length < 2) return;

	const sort = TimSort.sort;
	sort(array, (a, b) => getValueToSortBy(a) - getValueToSortBy(b));
}
