
const permutator = (inputArr) => {
    let result = [];
 
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                console.log(`i: ${i}`)
                let curr = arr.slice();
                console.log(curr);
                let next = curr.splice(i, 1);
                console.log(next);
                permute(curr, m.concat(next))
            }
        }
    }
 
    permute(inputArr)
    return result;
}
 
console.log(permutator([2,3,4]));