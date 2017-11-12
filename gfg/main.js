function sumDigits(no) {
    return no == 0 ? 0 : no % 10 + sumDigits(Math.floor(no / 10));
}

console.log(sumDigits(1352))