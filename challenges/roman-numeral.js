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
    const dictionary= { 
        1: "I",
        4: "IV",
        5: "V", 
        9: "IX",
        10: "X",
        40: "XL",
        50:"L", 
        90: "XC",
        100:"C", 
        400: "CD",
        500: "D", 
        900: "CM",
        1000: "M"    
    }
    let romanString = "";
    const dictionaryArray = Object.keys(dictionary);
    for(let i = dictionaryArray.length-1; i >= 0; i--){
        const number = dictionaryArray[i];
        if(n >= number){
            romanString += dictionary[number].repeat(Math.floor(n / number))
            n-= Math.floor(n / number) * number;
        }
    }
    return romanString;
}

let n = 12;
console.log('romanNumeral(n):', romanNumeral(n))


module.exports = romanNumeral;
