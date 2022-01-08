'use strict';
/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

let s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
let s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';

/// Complete the makeAnagram function below.
function makingAnagrams(s1, s2) {
    // Write your code here
let counter = {};
  let total = 0;

  //array.from(a) creates a shallow-copied array instance
  Array.from(s1).forEach(char => {
    counter[char] = counter[char] || 0;
    counter[char]++;
  });
  Array.from(s2).forEach(char => {
    counter[char] = counter[char] || 0;
    counter[char]--;
  });
  console.log(counter);
  Object.keys(counter).forEach(k => {
    if (counter[k] !== 0) {
      total += Math.abs(counter[k]);
    }
  });

  return total;
}

//Expected output: 19

let result = makeAnagram(s1, s2);
console.log(result);