#Bubble sort

It's the simplest and most inefficient sorting algorithm.

## How it works?

Given an array of items, bubble sort compares two items at a time and make sure that they are in correct order before moving to the next item. So it's going to make lots of comparisons.

>The basic algorithm as follows: 

1. Compare the first item to the second item
2. If the first item is greater than the second item, swap them.
3. Compare the second item with third item
4. If the second item is greater than the third item, swap them.
5. Repeat until the end of the data set is reached.

## Pseudo Code

```
for i=0, i < arrayLength, i++
    for j =0, j < arrayLength - i, j++
        if array[i] > array[j]
            swap( array[i], array[j)
```            
            
## Code:

>1st Variation

```
function BubbleSort(array) {
    var i, j, len = array.length;
    for(i =0 ; i < len; i++) {
        for(j = 0; j < len - i; j++ ) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

function swap(array, from , to) {
    var temp = array[from];
        array[from] = array[to];
        array[to] = temp;
}
```

>2nd Variation - with do while

```
function swap(array, from , to) {
    var temp = array[from];
        array[from] = array[to];
        array[to] = temp;
}
function BubbleSort(array) {
    var len = array.length;
    do {
        var swapped = false;
        for(var i = 0; i< len; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapped = true;
            }
        }
    }
    while(swapped==true)
    return array;
}
```
