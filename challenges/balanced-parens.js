/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let objParens = {};
    for(let i=0; i< input.length; i++){
      
        if(input[i] === "{" || input[i] === "(" || input[i] === "[" ){
            console.log('input[i]:', input[i])
            if(objParens[input[i]]) objParens[input[i]].push(i)
            else objParens[input[i]] = [i]
        }
        if(input[i] === "}"){
            console.log('input[i]:', input[i])
           if(lastParens(objParens) !== "{") return false;
           else {
            objParens["{"].pop(); 
            if(objParens["{"].length === 0){
                delete objParens["{"]
            }
           }
        }
        if(input[i] === ")"){
            console.log('input[i]:', input[i])
            if(lastParens(objParens) !== "(") return false;
            else {
                objParens["("].pop(); 
                if(objParens["("].length === 0){
                    delete objParens["("]
                }
            }
        }
        if(input[i] === "]"){
            console.log('input[i]:', input[i])
            if(lastParens(objParens) !== "[") return false;
            else {
                objParens["["].pop(); 
                if(objParens["["].length === 0){
                    delete objParens["["]
                }
            } 
        }
    }
    if(objParens["{"]) return false;
    if(objParens["("]) return false;
    if(objParens["["]) return false;

    return true;
}

function lastParens(obj){
    console.log('obj:', obj)
    
    let lastParen = "";
    let index =-1;
    if(obj["{"]){
       index= obj["{"][obj["{"].length-1];
       lastParen = "{";
    }
    if(obj["("]){
        if(obj["("][obj["("].length-1]>index){
            index= obj["("][obj["("].length-1];
            lastParen = "(";
        }
    }
    if(obj["["]){
        if(obj["["][obj["["].length-1]>index){
            index= obj["["][obj["["].length-1];
            lastParen = "[";
        }
    }
      console.log('lastParen:', lastParen)
    return lastParen;
  
}

console.log('balancedParens([])', balancedParens('['))
module.exports = balancedParens;
