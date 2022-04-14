/**
 * Función que elimina todos los elementos val del arreglo nums
 * @param {[]} nums arreglo de numeros
 * @param {*} valor valor a eliminar
 */

function removeElement (nums = [], val = 0) {
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            // nums.push('_');
            i--;
        }
    }
    return nums.length;

}


console.log(removeElement([5,7,3,4,5,6,7,5,9,5], 5));