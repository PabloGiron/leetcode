

function plusOne(digits = []) {
    
    let pivote = digits.length - 1;
    digits[pivote] += 1;

    while( pivote != -1){

        if(digits[pivote] < 10 ) return digits;
        if(digits[pivote - 1] === undefined) {
            digits.unshift(0);
            pivote += 1;
        }
        digits[pivote] = 0;
        digits[pivote - 1] += 1;
        pivote -= 1;
    }

    // 2 
    // for(let i=digits.length-1;i>=0;i--){
    //     digits[i]++;
    //     if(digits[i]>9){
    //         digits[i]=0;
    //     }
    //     else{
    //         return digits;
    //     }
    // }
    // digits.unshift(1);
    // return digits;
}

console.log(plusOne([4,9,9,9,9]));