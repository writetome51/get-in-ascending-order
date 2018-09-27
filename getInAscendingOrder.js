"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inAscendingOrder_notInAscendingOrder_1 = require("@writetome51/number-analysis-basic/inAscendingOrder_notInAscendingOrder");
var getAverage_1 = require("@writetome51/get-sum-average-product/getAverage");
/*****
 This sorting function is extremely fast, even with huge array.
 The sorting algorithm it uses is 'quick-sort'.  It finds the average value of the array, then moves all numbers
 less than the average into one array, and moves all numbers greater than or equal to the average into
 another array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls itself
 on them until they are both sorted.
 *****/
function getInAscendingOrder(numbers) {
    var average = getAverage_1.getAverage(numbers);
    var dividedLists = getLessThanAverage_and_greaterThanOrEqualToAverage(average, numbers);
    // It's possible that some lists are now sorted, or only contain many instances of one number:
    dividedLists = getInAscendingOrder_ifTheyAreStillNot(dividedLists);
    return getConcatenated(dividedLists);
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
            if (inAscendingOrder_notInAscendingOrder_1.notInAscendingOrder(lists[i])) {
                lists[i] = getInAscendingOrder(lists[i]);
            }
        }
        return lists;
    }
    function getConcatenated(arrays) {
        var emptyArray = [];
        return emptyArray.concat.apply(emptyArray, arrays);
    }
}
exports.getInAscendingOrder = getInAscendingOrder;
