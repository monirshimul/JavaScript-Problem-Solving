
///////////////////////////////// Reverse any String /////////////////////////////////////////

//=================={Decremental for loop}=======================
function revStr(str) {

    let revS = '';
    for (let i = str.length - 1; i >= 0; i--) {
        //console.log(str[i]);
        revS = revS + str[i];
        console.log(revS);
    }
    return revS;


}
//==================={Incremental for loop}======================
function revStrTwo(str) {

    let revS = '';
    for (let i = 0; i <= str.length - 1; i++) {
        //console.log(str[i]);
        revS = str[i] + revS;
        //revS = revS + str[i];
        console.log(revS);
    }
    return revS;


}

//================={split, reverse, join}========================
function revStrThree(str) {
    let splitString = str.split('');
    console.log(splitString);
    let rev = splitString.reverse();
    console.log(rev);
    let joinRev = rev.join('');
    console.log(joinRev);

    return joinRev;

}
//==================={split, reverse, join--in one line}======================
function revStrFour(str) {
    return splitString = str.split('').reverse().join('');
}


//=================={of}=======================

function revStrFive(str) {

    let revStr = [];
    for (let char of str) {
        //console.log(char);
        revStr = char + revStr;

    }
    return revStr;
}
//================={forEach}========================

function revStrSix(str) {
    let revStr = '';
    let strArr = str.split('');
    console.log(strArr);
    strArr.forEach(data => {
        revStr = data + revStr;
        console.log(revStr);
    })
    return revStr;
}

//================={reduce}========================

function revStrSeven(str) {
    let strArr = str.split('');
    return strArr.reduce((revStr, data) => {
        console.log(revStr);
        //console.log(data);
        return data + revStr;
    })
}


// Main Function =======================================
//const main = revStrFive([1, 2, 5, 6]);

const main = revStrSeven('knowledge');
console.log(main);