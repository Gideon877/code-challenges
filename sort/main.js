function sortMe(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var a = i + 1; a < arr.length; a++) {
            if (arr[i] > arr[a]) {
                var newA = arr[a];
                arr[a] = arr[i];
                arr[i] = newA;
            }
        }
    }
    return arr;
}

console.log(sortMe([7, 5, 2, 4, 3, 9, 10, 1]));
