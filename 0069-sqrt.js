const mySqrt = ( x = 0) =>{
    let sqrt = 1;
    if(x===0){
        return 0;
    }
    for(let i=1; i*i<=x; i++){
      sqrt = i;
    }
    return sqrt;
}

// mySqrt(81);
console.log(mySqrt(25000000000000000000));