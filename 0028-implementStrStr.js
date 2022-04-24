
const strStr = ( haystack = '', needle = '' ) =>{

    for (let i = 0; i < haystack.length; i++) {
        
        if( haystack[i] == needle[0]){
            if( haystack.slice( i, i + needle.length) === needle){
                return i;
            }
        }
    }
    return -1;
}

console.log(strStr('hello aaaaa b','ll'));