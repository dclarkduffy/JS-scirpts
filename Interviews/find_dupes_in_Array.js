//starting array
let array = [1, 1, 2, 2, 3, 4, 4];

//create function to check for duplicates
function dupeElemCheck() {
  let hash = {}; //used to create a key value which holds unique keys
  let finalanswer = []; //used to hold final result array containing dupes

  for (let i = 0; i < array.length; i++) {
    //basic loop to iterate
    let key = array[i]; //key is current iteration in the array

    if (hash[key]) {
      //if hash key exists
      hash[key]++; //increment the value aka "count"
      if (hash[key] >= 2) {
        //if the hash has a key of 2 or more it's a duplicate
        finalanswer.push(key); //add duplicate to my array
      }
    } else {
      hash[key] = 1; //if hash key doesn't exist add it
    }
  }
  return finalanswer; //return the array filled with duplicates
}

console.log(dupeElemCheck(array));
