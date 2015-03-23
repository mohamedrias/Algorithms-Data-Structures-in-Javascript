#Insertion Sort

If the number of items in a array is less, then insertion sort is a good choice to use.

In chrome v8 engine, If the number of items is less than 15 the engine uses insertion sort :)

##How it works?

It separtes the array into two sections, a sorted section and an unsorted section. Initially the entire array is unsorted and the sorted section is considere to be empty.

The first step is to add value to the sorted section and so the first item of array is used.

Then at each item in the unsorted section:

1. If the item value is less than last item of the sorted section
2. If the item value goes before the last item in sorted array, swap.
3. Now compare the item value to the previous value and before the last value. Then place the item into the open spot between them.