const phoneNumber = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
}


function letterCombinations(digits) {
    
    let result = [];
    let queue = [];
    queue.push('');
    if(digits == null) return [];
    while( queue.length != 0 ){
        let s = queue.shift();

        if(s.length == digits.toString().length) result.push (s);
        else{
            let val = phoneNumber[digits.toString()[s.length]];
            for (let i = 0; i < val.length; i++) {
                queue.push(s + val[i]);
            }
        }
    }
    
    return result;


}


console.log( letterCombinations() );