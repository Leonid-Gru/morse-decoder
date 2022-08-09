const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    const arr = [];
    const resArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        str = expr.substr(i, 10);
        let res = '';
        for (let i = 1; i < str.length; i += 2) {
            if (str[i - 1] == 1) {
                if (str[i] == 0) {
                    res += '.';
                } else if (str[i] == 1) {
                    res += '-';
                }
            }
        }
        arr.push(res);
    }
    arr.forEach(char => {
        if (char === '') {
            resArr.push(' ');
        } else {
            resArr.push(MORSE_TABLE[char]);
        }
    });
    return resArr.join('');
}

module.exports = {
    decode
}