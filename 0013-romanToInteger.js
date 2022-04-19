

function romanToInt(s) {
    
    let dictionary = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let result = 0;

    for(let i = 0; i < s.length; i++){

        if(dictionary[s[i]] >= dictionary[s[i+1]] ){
            result += dictionary[s[i]];
        }else if (dictionary[s[i]] < dictionary[s[i+1]]){
            result -= dictionary[s[i]];
        }
    }
    result += dictionary[s[s.length-1]];
    return result;
}

romanToInt('MMCCCXCIX');

