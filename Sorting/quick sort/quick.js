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
         * Partition function which divides i/p array
         * @param   {Array}  array Array to be partitioned & sorted
         * @param   {Number} left  left index
         * @param   {Number} right right index
         * @returns {Number} index of cursor
         */
        function DivideAndConquer(array, left, right) {
            var pivot = array[Math.floor((left + right) / 2)],
                i = left,
                j = right;
            /**
             * Check if both left and right indices are at same place
             * @param {Boolean} i <= j check condition
             */
            while (i <= j) {
                /**
                 * For arranging left part of array
                 * @param {Number} array[i] < pivot increase the index if element is less than pivot
                 */
                while (array[i] < pivot) {
                    i++;
                }
                /**
                 * Decrease index if the element is greater than pivot
                 * @param {Number} array[j] > pivot check condition and decrement the index 
                 */
                while (array[j] > pivot) {
                    j--;
                }

                /**
                 * Check condition and swap
                 * @param {Number} i <= j See if both pointers are in same location, swap them
                 */
                if (i <= j) {
                    swap(array, i, j);
                    i++;
                    j--;
                }
            }
            return i;
        }


        /**
         * Recursive QuickSort Function
         * @param   {Array}  array Array to be sorted
         * @param   {Number} left  Left index of the element
         * @param   {Number} right Right index of the element to divide
         * @returns {Array}  Sorted array
         */
        function QuickSort(array, left, right) {
            var index = 0;
            left = typeof left === "undefined" ? 0 : left,
                right = typeof right === "undefined" ? (array.length - 1) : right;

            if (left < right) {
                index = DivideAndConquer(array, left, right);
                /**
                 * Partition the first half and sort
                 * @param {Number} left < index Based on Index call quicksort   
                 */
                if (left < index) {
                    QuickSort(array, left, index - 1);
                }
                /**
                 * Partition the second half and sort
                 * @param {Boolean} right > index Sort the second half from pivot
                 */
                if (right > index) {
                    QuickSort(array, index, right);
                }
            }
            return array;
        }

        array = randomNumberGenerator(10000);
        console.time("QuickSort");
        console.log(QuickSort(array));
        console.timeEnd("QuickSort");


    })();