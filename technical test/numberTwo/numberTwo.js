var words = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

function dictionary(string) {
    var data = []
    var result = "";
    for (let index = 0; index < words.length; index++) {
        data.push(string.search(words[index]))
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i] != -1) {
            result += " " + words[i] + ", ";
        }
    }
    return result
}



console.log(dictionary("programit"));