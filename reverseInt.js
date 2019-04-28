
//=========================={Reverse Array of Interger}==============================
function revIntOne(str) {

    let revInt = [];
    for (let char of str) {
        //console.log(char);
        revInt = char + revInt;

    }
    return revInt;
}
//=========================={Reverse Simple Integer}==============================

function revIntTwo(int) {
    let intStr = int.toString();
    let splitStr = intStr.split('');
    //console.log(splitStr);
    let revStr = splitStr.reverse();
    //console.log(revStr);
    let joinStr = revStr.join('');
    //console.log(joinStr);
    let joinStrInt = parseInt(joinStr);
    return joinStrInt;
}

//=========================={Reverse Simple Integer one line}==============================

function revIntThree(int) {

    let joinStrInt = int.toString().split('').reverse().join('');
    return newInt = parseInt(joinStrInt);
}


//=========================={Reverse Simple Integer Negetive Value}==============================

function revIntFour(int) {

    let joinStrInt = int.toString().split('').reverse().join('');
    return newInt = parseInt(joinStrInt) * Math.sign(int);
}



//=================================={Calling all the function}======================================
//const main = revStrFive([1, 2, 5, 6]);
const main = revIntFour(-876835465);
console.log(main);