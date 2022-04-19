

function palindrome(num = 0) {
    
    let numberPalindrome = num.toString();
    console.log(numberPalindrome);

    for(let i = 0; i < numberPalindrome.length ; i++){
        if(numberPalindrome[i] != numberPalindrome[numberPalindrome.length - 1 - i]) return false
    }

    return true;
}

console.log(palindrome(3333333));