"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_ascending_order_1 = require("@writetome51/in-ascending-order");
var get_sum_average_product_1 = require("@writetome51/get-sum-average-product");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var getMergedArrays_1 = require("@writetome51/array-get-merged-arrays/getMergedArrays");
/*****
 Returns a new array with numbers in ascending order.
 The sorting algorithm :  It finds the average value of the numbers, then moves all numbers less than
 the average into one array, and moves all numbers greater than or equal to the average into another
 array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls
 itself on them until they are both sorted.  Then they're merged into a single array.
 *****/
function getInAscendingOrder(numbers) {
    // This line returns a copy because this function is expected to return an array independent
    // of the array passed in.
    if (isArray_notArray_1.isArray(numbers) && numbers.length === 1)
        return getCopy_1.getCopy(numbers);
    var lessThanAverage_and_atLeastAverage = getSeparatedInTwoArrays_usingAverageAsTheSeparator(numbers);
    // It's possible that some lists are now sorted, or only contain many instances of one number:
    lessThanAverage_and_atLeastAverage =
        getInAscendingOrder_ifTheyAreStillNot(lessThanAverage_and_atLeastAverage);
    return getMergedArrays_1.getMergedArrays(lessThanAverage_and_atLeastAverage);
    function getSeparatedInTwoArrays_usingAverageAsTheSeparator(numbers) {
        var average = get_sum_average_product_1.getAverage(numbers);
        return getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers);
    }
    function getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers) {
        for (var i = 0, lessThan = [], greaterThanOrEqualTo = []; i < numbers.length; ++i) {
            if (numbers[i] < average)
                lessThan.push(numbers[i]);
            else
                greaterThanOrEqualTo.push(numbers[i]);
        }
        return [lessThan, greaterThanOrEqualTo];
    }
    function getInAscendingOrder_ifTheyAreStillNot(lists) {
        for (var i = 0; i < lists.length; ++i) {
            if (in_ascending_order_1.notInAscendingOrder(lists[i])) {
                lists[i] = getInAscendingOrder(lists[i]);
            }
        }
        return lists;
    }
}
exports.getInAscendingOrder = getInAscendingOrder;
