function wordLadder(start, end, dict) {
    if (checkMerge(start, end)) {
        return [[start, end]];
    }

    var result = [];
    var listData = checkLict(start, dict);
    for (var i = 0; i < listData.length; i++) {
        var item = listData[i];

        var reducedDict = dict.slice(0);
        reducedDict.splice(reducedDict.indexOf(item), 1);

        var partialResult = wordLadder(item, end, reducedDict);
        for (var j = 0; j < 1; j++) {
            partialResult[j].unshift(start);
            result.push(partialResult);
        }
    }
    return result;
}

function checkMerge(a, b) {
    var count = 0;
    if (a.length != b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            if (++count > 1) {
                return false;
            }
        }
    }
    return 1 == count;
}

function checkLict(word, dict) {
    var data = [];
    for (var i = 0; i < dict.length; i++) {
        if (checkMerge(word, dict[i])) {
            data.push(dict[i]);
        }
    }
    return data;
}

function getResult(start, end, dict) {
    var result = wordLadder(start, end, dict);
    if (result.length > 0 && result[0].length == 1) {
        result = result[0][0].join(" ");
    } else if (result.length > 0 && result[0].length > 1) {
        result = (result[0][0][0] + " " + result[0][0][1].join(" ")).replaceAll(",", " ")
    }
    return result
}

console.log(getResult("hit", "dig", ["hot", "dot", "dog", "lot", "log"]));