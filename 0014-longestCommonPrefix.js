// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs = []) {

    let dictionaryPrefix = strs[0].split('');

    for( let i = 1; i < strs.length; i++){

        for(let j = 0; j < dictionaryPrefix.length; j++){

            
            if(dictionaryPrefix[j] != strs[i][j] && dictionaryPrefix[j] != null){
                dictionaryPrefix = dictionaryPrefix.slice(0,j);
            }
        }
    }
    return dictionaryPrefix.join('');

}


console.log(longestCommonPrefix(["flower","flowe","flight","flowever","flom"]));


// ====================== Backup ======================
// var longestCommonPrefix = function(strs) {
//     let dictionaryPrefix = strs[0].split('');
//     let res = [];

//     // console.log(dictionaryPrefix);
//     for( let i = 1; i < strs.length; i++){

//         for(let j = 0; j < dictionaryPrefix.length; j++){

//             if(dictionaryPrefix[j] == strs[i][j] && res[j] == null) {
//                 res.push(dictionaryPrefix[j]);
//             }
            
//             else if(res[j] != strs[i][j] && res[j] != null){
//                 dictionaryPrefix = dictionaryPrefix.slice(0,j);
//                 res = res.slice(0,j);
//             }

//         }
        
//     }
//     res = res.join('');
//     return res;

// };