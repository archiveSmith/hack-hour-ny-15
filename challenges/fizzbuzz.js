// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    //create an empty array
    let arr = [];
    //loop through until num
    for (let i = 1; i <= num; i++){
    //check if num divisible by 3 & 5, 3, or 5, else push num
        (i%3 === 0 && i%5 === 0) ? arr.push('fizzbuzz')
        : (i%3 === 0) ? arr.push('fizz')
        : (i%5 === 0) ? arr.push('buzz')
        : arr.push(i);
    }
    return arr;
}

module.exports = fizzbuzz;
