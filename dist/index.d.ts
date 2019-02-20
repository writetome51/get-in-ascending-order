/*****
 Returns a new array with numbers in ascending order.
 The sorting algorithm :  It finds the average value of the numbers, then moves all numbers less than
 the average into one array, and moves all numbers greater than or equal to the average into another
 array.  Then it checks to see if both those two lists are now sorted.  If not, it recursively calls
 itself on them until they are both sorted.  Then they're merged into a single array.
 *****/
export declare function getInAscendingOrder(numbers: number[]): number[];
