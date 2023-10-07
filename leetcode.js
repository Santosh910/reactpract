// var nums = [2, 7, 11, 15];
// var target = 9;

// function sumTwo(nums, target) {
//     var result = [];
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             var sum = nums[i] + nums[j];
//             if (sum === target) {
//                 result.push(i);
//                 result.push(j);
//                 return result;
//             }
//         }
//     }
//     return result;
// }

// console.log(sumTwo(nums, target));


// var x =  "aba" ;    //121;

// function palindrome(x){

//     const newNumber = x.toString();
//     const newNUmberRev = newNumber.split('').reverse();
//     const newRev = newNUmberRev.join('');               //parseInt(newNUmberRev.join(''));

//     return newRev === x;
// }
// console.log(palindrome(x));

// var s = "III"


// function romanToInt(s){
// const symbols = {
//     'I' : 1,
//     'V' : 5,
//     'X' : 10,
//     'L' : 50,
//     'C' : 100,
//     'D' : 500,
//     'M' : 1000,
// }
//     const allCharacters = s.split('');
//     const len = s.length;
//     let result = 0;

//     for(var i = 0;i < len;i++){
//         if(i < len-1 && symbols[allCharacters[i+1]] > symbols[allCharacters[i]]){
//                result -= symbols[allCharacters[i]];
//         }else{
//             result += symbols[allCharacters[i]]
//         }
//     }
//     return result;
// }  

// console.log(romanToInt(s))

var strs = ["flower","flow","flight"];
// console.log(strs.length)

const longestCommonPrefix = (strs) =>{
    if(strs.length == 0){
        return "";
    }
    for( var i = 0;i < strs[0].length;i++){
        for(var j = 1;j < strs.length;j++){
            if(strs[0][i] != strs[j][i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
}

console.log(longestCommonPrefix(strs))