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
    const romanNumeralTable = {1 : "I", 2: "II", 3: "III",  4:"IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 20: "XX", 
    30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"}
    if (romanNumeralTable[n]) {
        return romanNumeralTable[n]
    }
    let onesPlace = n % 10
    let tensPlace = n % 100 - onesPlace
    let hundredsPlace = (n - (n % 100))/100
    let containerString = ""
    let onesPlaceString = ""
    let tensPlaceString = ""
    let hundredsPlaceString = ""
    let thousandsPlace = Math.floor(n / 1000)
    let thousandsPlaceString = ""
    console.log(thousandsPlace)

    if (n < 100) {
        onesPlaceString = romanNumeralTable[onesPlace];
        tensPlaceString = romanNumeralTable[tensPlace];
        containerString = tensPlaceString + onesPlaceString
    } else if (n > 100 && n < 1000) {
        hundredsPlaceString = (romanNumeralTable[100]).repeat(hundredsPlace)
        n -= (100 * hundredsPlace)
        tensPlaceString = romanNumeralTable[tensPlace]
        containerString = hundredsPlaceString + tensPlaceString + onesPlaceString
    } else if (n > 1000) {

        thousandsPlaceString = romanNumeralTable[1000].repeat(thousandsPlace)
        hundredsPlaceString = (romanNumeralTable[100]).repeat(hundredsPlace)
        console.log(hundredsPlace)

        n -= (100 * hundredsPlace)
        tensPlaceString = romanNumeralTable[tensPlace]
        containerString = thousandsPlaceString + hundredsPlaceString + tensPlaceString + onesPlaceString
    }





    return containerString
}


console.log(romanNumeral(1001))
module.exports = romanNumeral;



/* 
    let onesPlace = n % 10
    const tensPlace = n - onesPlace
    let hundredsPlace = 0
    let containerString= ""
    let onesPlaceString = ""

    if (n > 10 && n < 100) {
    console.log("remainder", onesPlace)
    containerString = romanNumeralTable[tensPlace]
    containerString += romanNumeralTable[onesPlace]
    } else if (n < 1000) {
        //n --> 202
        let times = Math.floor(n/100)
        onesPlaceString = romanNumeralTable[100].repeat(times)
        console.log(n)
        n -= times
        console.log(n)

        containerString += romanNumeralTable[times]

    } else {
        //n = 1001
        let times = Math.floor(n/1000)
        containerString = romanNumeralTable[1000].repeat(times)
        onesPlace = n % (1000 * times)
        containerString += romanNumeralTable[onesPlace]

        console.log(containerString)

    }
    return containerString
*/