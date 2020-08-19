# getInNumericOrder(numbers): number[]

Returns new array of `numbers` in numeric order.  
Uses [node-timsort](https://github.com/mziccard/node-timsort) for the sorting.


## Examples
```js
let numbers = [10, 6, 44, 2, 21, 66, 32, 22, 33, 44, 11];  
getInNumericOrder(numbers);  
    // --> [ 2, 6, 10, 11, 21, 22, 32, 33, 44, 44, 66 ]


numbers = [10.2, 6.15, 2.25, 21.1, 32.2, 22.2, 33.2, 44.025, 11.1];  
getInNumericOrder(numbers);  
    // --> [ 2.25, 6.15, 10.2, 11.1, 21.1, 22.2, 32.2, 33.2, 44.025]
```

## Installation
`npm i  @writetome51/get-in-numeric-order`

## Loading
```js
import {getInNumericOrder} from '@writetome51/get-in-numeric-order'; 
```

