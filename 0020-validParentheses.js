// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`


function isValid(s = '') {
    
    let resp = [];
    s = s.split('');
    const keysObj = {
        '{':'}',
        '[':']',
        '(':')'
    }

    for( let i = 0; i < s.length;i++){
        if( s[i] in keysObj  || Object.values(keysObj).includes(s[i]) ){
            if (s[i] in keysObj){
                resp.push(s[i])
            }
            else if(Object.values(keysObj).includes(s[i]) ){
                // const ultimoPila = keysObj[resp.pop()];
                if( keysObj[resp.pop()] != s[i] ){
                    return false;
                }
            }
        }
    }
  
    return resp.length === 0
    
}

console.log(isValid(" ()  "))
// console.log(isValid("([ { ( }  ]) )"))


  // s.forEach(character => {
    //     if( character in keysObj  || Object.values(keysObj).includes(character) ){
    //         if (character in keysObj){
    //             resp.push(character)
    //         }
    //         else if(Object.values(keysObj).includes(character) ){
    //             const ultimoPila = keysObj[resp.pop()];
    //             // console.log('pila: '+keysObj[ultimoPila])
    //             // console.log(`char: ${character}`)
    //             if( ultimoPila != character || resp.length <= 0 ){
    //                 return false;
    //             }
    //         }
    //     } 
    // });
