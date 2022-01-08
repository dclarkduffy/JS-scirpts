// Given a binary string find the longest consecutive 1s
// example: '101110' -> 3

let string = '101110';

function longestLen(string) {
  let expload = string.split('0'); // in memory of php string expload method
  let answer = 0;
  for (let i = 0; i < expload.length; i++) {
    if (expload[i].length > answer) {
      answer = expload[i].length;
    }
  }
  return answer;
}
console.log(longestLen(string));
