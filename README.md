# getInNumericOrder(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr: Array&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValueToSortBy? = (element) => element<br>): Array&lt;T&gt;

Returns new copy of `arr` in ascending numeric order. Uses super-fast [node-timsort](https://github.com/mziccard/node-timsort)   
for the actual sorting.  
It sorts using this comparison function: `(a, b) => getValueToSortBy(a) - getValueToSortBy(b)`.  
Optional callback `getValueToSortBy(element)` must return a number. By default it simply  
returns the passed `element`.  


## Examples
```js
// A basic number sort:
let numbers = [10, 6, 44, 2, 21, 66, 32, 44];  
getInNumericOrder(numbers);  
// --> [ 2, 6, 10, 21, 32, 44, 44, 66 ]

// sort objects by property 'age'
let objects = [{age: 12}, {age: 7}, {age: 18}, {age: 5}]; 
getInNumericOrder(objects, (obj) => obj.age);  
// --> [{age: 5}, {age: 7}, {age: 12}, {age: 18}]

// sort arrays by length:
let arrays = [ [1,2,3], [1], [], [4,5], [0], [6,7], [4,5,6] ];
getInNumericOrder(arrays, (arr) => arr.length);  
// --> [ [], [1], [0], [4,5], [6,7], [1,2,3], [4,5,6] ]
```

## Installation
`npm i  @writetome51/get-in-numeric-order`

## Loading
```js
import {getInNumericOrder} from '@writetome51/get-in-numeric-order'; 
```

