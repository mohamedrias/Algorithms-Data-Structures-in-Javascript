(function () {
    "use strict";
    var array;
    
    /**
     * Array Shuffler
     * @param   {Array} array Array to be shuffled
     * @returns {Array} shuffled array
     */

    function shuffleArray(array) {
        var tempArray = [],
            j;
        for (j = array.length; j--;) {
            var temp = array.splice(Math.floor(Math.random() * (j + 1)), 1)[0];
            tempArray.push(temp);
        }
        return tempArray;
    }

    /**
     * Randome array generator in a given number
     * @param   {Number} range upper limit upto which to generate number
     * @returns {Array}  randomly generated shuffled array
     */
    function randomNumberGenerator(range) {
        var array = [],
            i;
        for (i = 0; i < range; i++) {
            array.push(i);
        }
        return shuffleArray(array);
    }

    array = randomNumberGenerator(1000);

    
    /**
     * Swaps to elements in an array
     * @param {Array}  array Array in which need to swap
     * @param {Number} from  index of from item
     * @param {Number} to    index of to item
     */
    function swap(array, from, to) {
        var temp = array[from];
        array[from] = array[to];
        array[to] = temp;
    }

    /**
     * Bubble Sort
     * @param   {Array} array Array to be sorted
     * @returns {Array} Sorted Array
     */
    function bubbleSort(array) {
        var i, j, len = array.length;
        for (i = 0; i < len; i++) {
            // Outer loop which determines number of iterations
            for (j = 0; j < len - i; j++) {
                // Inner loop which swaps elements
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
        return array;
    }

    console.log("Bubble sort : ", bubbleSort(array));


    array = randomNumberGenerator(1000);

    /**
     * Bubble Sort with do while loop
     * @param   {Array} array array to be sorted
     * @returns {Array} sorted array
     */
    function bubbleSortWhile(array) {
        var len = array.length,
            sorted = false;
        do {
            sorted = false;
            for (var i = 0; i < len; i++) {
                if (array[i] > array[i + 1]) {
                    swap(array, i, i + 1);
                    sorted = true;
                }
            }
        }
        while (sorted === true);
        return array;
    }

    console.log("Bubble sort with do while : ", bubbleSortWhile(array));
})();