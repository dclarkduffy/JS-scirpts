//if any two numbers in array add up to integer, return true else false

//starting array
let array = [2, 4, 7, 9, 5];
let integer = 10;

function sum2Integer(array, integer) {
  //declare my variables
  let missingInteger;
  let flag;

  //basic loop
  for (let i = 0; i <= array.length; i++) {
    missingInteger = integer - array[i];

    //Console out for debugging
    console.log(`Missing Int: ${missingInteger}
    MissingIntIndex: ${array.indexOf(missingInteger)}
    iIndex: ${array.indexOf(array[i])}`);

    //logic to determine if there is a valid answer within the array
    if (
      array.indexOf(missingInteger) !== -1 &&
      array.indexOf(missingInteger) !== array.indexOf(array[i])
    ) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  //return final results
  if (flag) {
    return true;
  } else {
    return false;
  }
}

console.log(sum2Integer(array, integer));
