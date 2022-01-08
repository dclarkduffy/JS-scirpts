let s = 'ABABABAc1cB';
function alternatingCharacters(s) {
  // Write your code here
  let dupeAlarm = false;
  let dupeCount = 0;
  //loop through each character of the string
  for (let i = 0; i < s.length; i++) {
    //console.log(sCopy.substring(i, i + 1), sCopy.substring(i + 1, i + 1));
    if (s.substring(i, i + 1) === s.substring(i + 1, i + 2)) {
      dupeAlarm = true;
      dupeCount++;
    }
  }
  if (dupeAlarm) {
    console.log(
      ` Duplicate detected! We have detected ${dupeCount} matching adjacent characters.`
    );
    return dupeCount;
  } else {
    console.log(`No errors detected =D
There were ${dupeCount} matching adjacent characters.`);
    return dupeCount;
  }
}

alternatingCharacters(s);
