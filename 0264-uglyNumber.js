// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.


function nthUglyNumber(n) {
    
    let arrResp = [];
    let  i2 = 0, i3 = 0, i5 = 0;
    let next2mul = 2;
    let next3mul = 3;
    let next5mul = 5;
    let next = 1;              //initially the ugly number is 1
    arrResp.push(1);

    while( arrResp.length < n){
        next = Math.min(next2mul, next3mul, next5mul);
        arrResp.push(next);


        if( next == next2mul ){
            i2++;
            next2mul = arrResp[i2] * 2;
        }
        if( next == next3mul){
            i3++;
            next3mul = arrResp[i3] * 3;
        }
        if( next == next5mul){
            i5++;
            next5mul = arrResp[i5] * 5;
        }
    }

    return arrResp[ arrResp.length - 1];
}

console.log( nthUglyNumber(11));