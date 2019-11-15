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

 //create decimal value array
 //create romanNumeral array 
 //match decimal value to romanNumeral based on input n
 //create conditionals based on what falls under each roman numeral category 
 

function romanNumeral(n) {
 let decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 let romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let romanNum = '';

 for(let i = 0; i < decimalValue.length; i++){
  if(n >= 1){
    romanNum += 'I';
  }else if(n >= 4){
    romanNum += 'IV';
  }else if(n >= 5){
    romanNum += 'V';
  }else if(n >= 9){
    romanNum += 'IX';
  }else if(n >= 10){
    romanNum += 'X';
  }else if(n >= 40){
    romanNum += 'XL';
  }else if(n >= 50){
    romanNum += 'L';
  }else if(n >= 90){
    romanNum += 'XC';
  }else if(n >= 100){
    romanNum += 'C';
  }else if(n >= 400){
    romanNum += 'D';
  }else if(n >= 500){
  romanNum += 'CM';
  }else if(n >= 900){
    romanNum += 'C';
  }else if(n >= 1000){
    romanNum += 'M';
  }
  return romanNum;
}


module.exports = romanNumeral;
