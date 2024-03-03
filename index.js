
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('cubes-ashepeople');
const { lib2 } = require('quizgame-ashepeople');

function shellSort(arr) {
    const len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            const temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Shell Sort:", shellSort(array));


module.exports = { shellSort };
