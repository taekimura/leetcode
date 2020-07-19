function ArrayChallenge1(arr) {
    var sums = [];
    var target = arr[0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                sums.push(arr[i], ",", arr[j], " ");
            }
        }
    }
    if (sums.length === 0) {
        return -1;
    }
    return sums.join("");
}
// TESTS
console.log("--The results of arrayChallenge1 below--");
console.log(
    "Output: " + ArrayChallenge1([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])
);
console.log("Output: " + ArrayChallenge1([7, 3, 5, 2, -4, 8, 11]));
console.log("Output: " + ArrayChallenge1([1, 3, 5, 2, -3, 8, 11]));
