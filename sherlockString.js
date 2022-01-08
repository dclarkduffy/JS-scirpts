function isValid(s) {
  //declare my variables
  let hash = {};
  let max, min;
  let minCount = 0;
  let maxCount = 0;
  let otherCount = 0;

  //get frequencies of each char
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (hash[key]) {
      hash[key]++;
    } else {
      hash[key] = 1;
    }
  }

  //move all strings to an array
  let frequencies = [];
  for (let key in hash) {
    frequencies.push(hash[key]);
  }

  //sort the array, obtain max/min frequencies
  frequencies.sort();
  min = frequencies[0];
  max = frequencies[frequencies.length - 1];

  //get the number of max count and min count for the frequencies
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] === max) {
      maxCount++;
    }
    if (frequencies[i] === min) {
      minCount++;
    }
    if (frequencies[i] !== min && frequencies[i] !== max) {
      otherCount++;
    }
  }
  /************************** * TESTING   * **************************/
  console.log(frequencies);
  console.log(`
   min = ${min}
   max = ${max}
   minCount = ${minCount}
   maxCount = ${maxCount}`);

  //final steps to validate the string(s)
  if (minCount === 1 && min === 1 && otherCount === 0) {
    return 'YES';
  }
  if (min === max) {
    return 'YES';
  }
  if (maxCount === minCount) {
    return 'NO';
  }
  if (max - min !== 1) {
    return 'NO';
  }
  if (maxCount === 1 || minCount === 1) {
    return 'YES';
  }
  if (max - (min - 1) === max && minCount === 1 && maxCount === 1) {
    return 'YES';
  }
  if (minCount !== maxCount || minCount !== otherCount) {
    return 'NO';
  }

  return 'NO';
}

console.log(isValid('xxxaabbccrry'));
