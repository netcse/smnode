const ASCII_SIZE = 256;

function getMaxOccuringCharacter(str) {
    let count = new Array(256);
    count.fill(0);

    let length = str.length;

    for (let i = 0; i < length; i++) {
        count[str[i].charCodeAt(0)]++;
    }

    let max = -1;
    let result;

    for (let i = 0; i < length; i++) {
        if (max < count[str[i].charCodeAt(0)]) {
            max = count[str[i].charCodeAt(0)];
            result = str[i]
        }
    }
    return result;
}

let character = getMaxOccuringCharacter('geeksforgeeks');
console.log(character);