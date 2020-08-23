# orderNumerically(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr: any[]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValueToSortBy? = (element) => element<br>): void

Re-orders `arr` in ascending numeric order. Uses super-fast [node-timsort](https://github.com/mziccard/node-timsort) for the actual sorting.  
It sorts using this comparison function: `(a, b) => getValueToSortBy(a) - getValueToSortBy(b)`.  
Optional callback `getValueToSortBy(element)` must return a number. By default it simply  
returns the passed `element`.  


## Examples
```js
// A basic number sort:
let numbers = [10, 6, 44, 2, 21, 66, 32, 44];  
orderNumerically(numbers); 
console.log(numbers); 
//  [ 2, 6, 10, 21, 32, 44, 44, 66 ]

// sort objects by property 'age'
let objects = [{age: 12}, {age: 7}, {age: 18}, {age: 5}]; 
orderNumerically(objects, (obj) => obj.age);  
console.log(objects); 
//  [ {age: 5}, {age: 7}, {age: 12}, {age: 18} ]

// sort arrays by length:
let arrays = [ [1,2,3], [1], [], [4,5], [0], [6,7], [4,5,6] ];
orderNumerically(arrays, (arr) => arr.length); 
console.log(arrays);  
// [ [], [1], [0], [4,5], [6,7], [1,2,3], [4,5,6] ]
```

## Installation
`npm i @writetome51/order-numerically`

## Loading
```js
import {orderNumerically} from '@writetome51/order-numerically'; 
```
