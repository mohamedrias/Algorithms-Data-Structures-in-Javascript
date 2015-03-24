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

        array = randomNumberGenerator(1000);

        /**
         * Selection Sort
         * @param   {Array} array Array to be sorted
         * @returns {Array} Sorted array
         */
        function SelectionSort(array) {
            var i,
                j,
                tempIndex, // temporary variable which stores the data
                len = array.length;

            for (i = 0; i < len - 1; i++) {
                tempIndex = i;
                for (j = i + 1; j < len; j++) {
                    if (array[j] < array[tempIndex]) {
                        tempIndex = j;
                    }
                }
                swap(array, tempIndex, i);
            }

            return array;
        }
        console.log(array);
        console.time("SelectionSort");
        console.log(SelectionSort(array));
        console.timeEnd("SelectionSort");

        //TODO: Add more comments

    })();