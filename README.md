# getInAscendingOrder(numbers): number[]

Returns new array of `numbers` in ascending order.  
Each number inside `numbers` must be of type 'number', and must be a finite number.


## Examples
```
let numbers = [10, 6, 44, 2, 21, 66, 32, 22, 33, 44, 11];  
getInAscendingOrder(numbers);  
--> [ 2, 6, 10, 11, 21, 22, 32, 33, 44, 44, 66 ]


let numbers = [10.2, 6.15, 2.25, 21.1, 66.3, 32.2, 22.2, 33.2, 44.025, 11.1];  
getInAscendingOrder(numbers);  
--> [ 2.25, 6.15, 10.2, 11.1, 21.1, 22.2, 32.2, 33.2, 44.025, 66.3 ]
```

## Installation
`npm i  @writetome51/get-in-ascending-order`

## Loading
```
// if using TypeScript:
import {getInAscendingOrder} from '@writetome51/get-in-ascending-order'; 
// if using ES5 JavaScript:
var getInAscendingOrder = 
    require('@writetome51/get-in-ascending-order').getInAscendingOrder;
```

