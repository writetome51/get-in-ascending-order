"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_ascending_order_1 = require("@writetome51/in-ascending-order");
var get_sum_average_product_1 = require("@writetome51/get-sum-average-product");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var getMergedArrays_1 = require("@writetome51/array-get-merged-arrays/getMergedArrays");
/*****
 This sorting function is extremely fast, even with huge array.
 The sorting algorithm it uses is 'quick-sort'.  It finds the average value of the array, then moves all numbers
 less than the average into one array, and moves all numbers greater than or equal to the average into
 another array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls itself
 on them until they are both sorted.
 *****/
function getInAscendingOrder(numbers) {
    if (isArray_notArray_1.isArray(numbers) && numbers.length === 1)
        return numbers;
    var average = get_sum_average_product_1.getAverage(numbers);
    var dividedLists = getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers);
    // It's possible that some lists are now sorted, or only contain many instances of one number:
    dividedLists = getInAscendingOrder_ifTheyAreStillNot(dividedLists);
    return getMergedArrays_1.getMergedArrays(dividedLists);
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
