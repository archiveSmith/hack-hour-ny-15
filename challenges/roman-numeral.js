/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    //seperate out the number by each character (i.e. the 'ones' position, the tens, the hundreds)
    //build each number
    //concat & return the full string
    let num = n.toString().split("").map(numString => parseInt(numString))
    let numString = ""
    while (num.length > 0) {
        if (num.length === 4) { //thousand's place
            for (let i = 0; i < num[0]; i++){
                numString += 'M';
            }
            num.shift()
        };
        if (num.length === 3) {  //hundred's place
            if (num[0] < 4){
                for (let i = 0; i < num[0]; i++) {
                    numString += 'C'
                }
                num.shift()
            }
            else if (num[0] === 4) {
                numString += 'CD'
                num.shift()
            }
            else if (num[0] === 5) {
                numString += 'D'
                num.shift()
            }
            else if (num[0] < 9 && num[0] > 5){
                numString += 'D'
                for (let i = 0; i < (num[0] - 5); i++) {
                    numString += 'C'
                }
                num.shift()
            }
            else if (num[0] === 9) {
                numString += 'CM'
                num.shift()
            }
        }
        if (num.length === 2) {  //tens's place
            if (num[0] < 4){
                for (let i = 0; i < num[0]; i++) {
                    numString += 'X'
                }
                num.shift()
            }
            else if (num[0] === 4) {
                numString += 'XL'
                num.shift()
            }
            else if (num[0] === 5) {
                numString += 'L'
                num.shift()
            }
            else if (num[0] < 9 && num[0] > 5){
                numString += 'L'
                for (let i = 0; i < (num[0] - 5); i++) {
                    numString += 'X'
                }
                num.shift()
            }
            else if (num[0] === 9) {
                numString += 'XC'
                num.shift()
            }   
        } 
        if (num.length === 1) {  //one's place
            if (num[0] < 4){
                for (let i = 0; i < num[0]; i++) {
                    numString += 'I'
                }
                num.shift()
            }
            else if (num[0] === 4) {
                numString += 'IV'
                num.shift()
            }
            else if (num[0] === 5) {
                numString += 'V'
                num.shift()
            }
            else if (num[0] < 9 && num[0] > 5){
                numString += 'V'
                for (let i = 0; i < (num[0] - 5); i++) {
                    numString += 'I'
                }
                num.shift()
            }
            else if (num[0] === 9) {
                numString += 'IX'
                num.shift()
            }   
        }
    }
    return numString;
}

module.exports = romanNumeral;

// console.log(romanNumeral(3721)); 
// console.log(romanNumeral(297)); // CCXCVII