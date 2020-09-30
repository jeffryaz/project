function largestPalindrome(n) {
    if (!isNaN(n) && n != "" && n != 0) {
        var arr = [];
        var value_1 = 9;
        var value_2 = 1;
        for (var a = 2; a <= n; a++) {
            value_1 = value_1.toString() + "9"
            value_2 = value_2.toString() + "0"
        }
        for (var i = value_1; i > value_2; i--) {
            for (var j = value_1; j > value_2; j--) {
                var count = j * i;
                if (isPalindrom(count)) {
                    arr.push(j * i);
                }
            }
        }
        return Math.max.apply(Math, arr);
    } else {
        return "Harus Number dan tidak boleh 0";
    }
}

function isPalindrom(count) {
    return count.toString() == count.toString().split("").reverse().join("");
}

console.log(largestPalindrome(3));