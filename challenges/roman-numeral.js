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

    const romanNumeralTable = {1 : "I", 2: "II", 3: "III",  4:"IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"}


    if (romanNumeralTable[n]) {
        return romanNumeralTable[n]
    }

    //create 11


    const onesPlace = n % 10
    const tensPlace = n - onesPlace
    let containerString= ""

    if (n > 10 && n < 20) {
    console.log("remainder", onesPlace)
    containerString = romanNumeralTable[tensPlace]
    containerString += romanNumeralTable[onesPlace]
    } else if (n < 100) {
        
    }

    return containerString
}


console.log(romanNumeral(19))
module.exports = romanNumeral;
