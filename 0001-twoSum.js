
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
    
//     let position = 1, flag= true;
//     let sum = nums[0];

//     for (let i = 0; i < nums.length; i++) {
        

//         for(let j = 0; j< nums.length; j++){
//             if(j != i){
//                 if( nums[i] + nums[j] == target) return [i, j]
//             }
//         }
//         sum += nums[position];
    
    
//     }

// }

//-------------------- Version 2 ----------------------------------
function twoSum(nums, target) {

    const history = new Map();
    for(let i = 0; i < nums.length; i++){
        let res = target - nums[i];
        if(history.get(res) == null){
            history.set( nums[i], i);
        }else{
            return [history.get(res), i];
        }
        
    }

}


console.log(twoSum([2,7,11,15],9));