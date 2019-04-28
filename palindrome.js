

function palindromeStr(str) {

    let revStr = str.split('').reverse().join('');
    console.log(revStr);
    return revStr === str;


}

const main = palindromeStr('reverse');
console.log(main);