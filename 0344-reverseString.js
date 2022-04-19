// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s =[]) {
    
    let pivote = 0;
    for(let i = 0; i < (s.length)/2; i++){
        pivote = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = pivote;

    }
    return s;

}


console.log(reverseString(["H","a","n","n","a","h"]))