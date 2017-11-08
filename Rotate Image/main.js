arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var rotatedArray = [
    [],
    [],
    []
];
var arr1 = rotatedArray[0],
    arr2 = rotatedArray[1],
    arr3 = rotatedArray[2];

function rotateImage(myArr) {
    myArr.forEach(function(currentArray) {

        for (var index = 0; index < currentArray.length; index++) {
            var eachNumber = currentArray[index]; // Get each array value

            if (index === 0) {
                arr1.push(eachNumber)
                sortMe(arr1)
            } else if (index === 1) {
                arr2.push(eachNumber)
                sortMe(arr2)
            } else if (index === 2) {
                arr3.push(eachNumber)
                sortMe(arr3)
            }
        }
    })
}

/* -----------------------------------------------------------------------------
Sort array of numbers in Descending Order */
function sortMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var a = i + 1; a < arr.length; a++) {
            if (arr[i] < arr[a]) {
                var newA = arr[a];
                arr[a] = arr[i];
                arr[i] = newA;
            }
        }
    }
    return arr;
}
rotateImage(arr)
console.log(rotatedArray);
/* -----------------------------------------------------------------------------
 Expected Results
 rotateImage(arr) =
     [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/
