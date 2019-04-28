//////////////////////////////////////Capitalized the first letter of a word in a sentence///////////////////////////////////

///////////////////////////Using for Loop//////////////////////////
function capitalizedLetter(str) {

    let strArr = str.toLowerCase().split(' ');
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
            strArr[i].substring(1);
    }
    return strArr.join(' ');


}

const main = capitalizedLetter('A developer portfolio website and blog management web application with easy to use content management system.');

console.log(main);